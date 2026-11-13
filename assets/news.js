function escapeHtml(text) {
  return text.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function inline(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
}

function markdown(source) {
  const blocks = [];
  let list = null;
  const closeList = () => {
    if (list) blocks.push(`<ul>${list.join("")}</ul>`);
    list = null;
  };
  for (const raw of source.replace(/\r/g, "").split("\n")) {
    const line = raw.trim();
    if (/^[-*] /.test(line)) {
      (list ||= []).push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }
    closeList();
    if (!line) continue;
    const heading = line.match(/^#{1,4} (.+)$/);
    blocks.push(heading ? `<h3>${inline(heading[1])}</h3>` : `<p>${inline(line)}</p>`);
  }
  closeList();
  return blocks.join("");
}

function summary(release, version) {
  const body = (release.body || "").trim();
  if (body) return body.replace(new RegExp(`^SisDoc ${version.replace(/\./g, "\\.")}:\\s*`), "");
  return "Melhorias e correções.";
}

async function showReleases() {
  const container = document.getElementById("releases");
  const { fetchJson, describeRelease, RELEASES_API } = window.SisDoc;
  try {
    const releases = (await fetchJson(`${RELEASES_API}?per_page=30`, "sisdoc-releases"))
      .filter(r => !r.draft && !r.prerelease && describeRelease(r));
    if (releases.length === 0) throw new Error("sem versões");
    container.innerHTML = releases.map((release, index) => {
      const info = describeRelease(release);
      const text = summary(release, info.version);
      return `
        <article class="release${index === 0 ? " latest" : ""}">
          <div class="release-head">
            <h2>Versão ${escapeHtml(info.version)}</h2>
            ${index === 0 ? '<span class="chip">Mais recente</span>' : ""}
            <time datetime="${release.published_at}">${escapeHtml(info.date)}</time>
          </div>
          <div class="release-body">${markdown(text.charAt(0).toUpperCase() + text.slice(1))}</div>
          ${index === 0 ? `
            <div class="release-actions">
              <a class="btn btn-primary btn-sm" href="${info.url}">Baixar a versão ${escapeHtml(info.version)}</a>
              <span class="small muted">${info.sizeMb} MB</span>
            </div>` : `
            <div class="release-actions"><a class="small" href="${info.url}">Baixar esta versão (${info.sizeMb} MB)</a></div>`}
        </article>`;
    }).join("");
  } catch {
    container.innerHTML = `
      <div class="empty">
        <p>Não foi possível carregar as versões agora.</p>
        <p style="margin:0"><a href="${window.SisDoc?.RELEASES_PAGE || "https://github.com/LuizHRFerreira/SisDoc-releases/releases"}">Ver as versões no GitHub</a></p>
      </div>`;
  }
}

if (window.SisDoc) showReleases();
else window.addEventListener("DOMContentLoaded", showReleases);

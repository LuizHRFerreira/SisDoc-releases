const RELEASES_API = "https://api.github.com/repos/LuizHRFerreira/SisDoc-releases/releases";
const RELEASES_PAGE = "https://github.com/LuizHRFerreira/SisDoc-releases/releases/latest";

function readCache(key) {
  try {
    const cached = JSON.parse(sessionStorage.getItem(key));
    if (cached && Date.now() - cached.savedAt < 10 * 60 * 1000) return cached.value;
  } catch {
    return null;
  }
  return null;
}

function writeCache(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ savedAt: Date.now(), value }));
  } catch {
    return;
  }
}

async function fetchJson(url, cacheKey) {
  const cached = readCache(cacheKey);
  if (cached) return cached;
  const response = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
  if (!response.ok) throw new Error(`GitHub respondeu ${response.status}`);
  const value = await response.json();
  writeCache(cacheKey, value);
  return value;
}

function installerOf(release) {
  return (release.assets || []).find(asset => /^SisDoc-Setup-.+\.exe$/i.test(asset.name));
}

function describeRelease(release) {
  const installer = installerOf(release);
  if (!installer) return null;
  return {
    version: release.tag_name.replace(/^v/, ""),
    url: installer.browser_download_url,
    sizeMb: Math.round(installer.size / 1024 / 1024),
    date: new Date(release.published_at).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" }),
  };
}

window.SisDoc = { fetchJson, describeRelease, installerOf, RELEASES_API, RELEASES_PAGE };

function setupHeader() {
  const header = document.querySelector(".site-header");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar o menu" : "Abrir o menu");
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
}

async function fillReleaseInfo() {
  const targets = document.querySelectorAll("[data-download-link], [data-release-summary], [data-release-version], [data-release-detail]");
  if (targets.length === 0) return;
  try {
    const latest = describeRelease(await fetchJson(`${RELEASES_API}/latest`, "sisdoc-latest"));
    if (!latest) return;
    document.querySelectorAll("[data-download-link]").forEach(link => { link.href = latest.url; });
    document.querySelectorAll("[data-download-label]").forEach(label => { label.textContent = `Baixar o SisDoc ${latest.version}`; });
    document.querySelectorAll("[data-release-summary]").forEach(el => {
      el.textContent = `Versão ${latest.version} · Windows 10 ou 11 · 64 bits · ${latest.sizeMb} MB`;
    });
    document.querySelectorAll("[data-release-version]").forEach(el => { el.textContent = `Versão ${latest.version}`; });
    document.querySelectorAll("[data-release-detail]").forEach(el => {
      el.textContent = `Versão ${latest.version}, publicada em ${latest.date}`;
    });
    document.querySelectorAll("[data-release-size]").forEach(el => { el.textContent = `${latest.sizeMb} MB`; });
  } catch {
    document.querySelectorAll("[data-download-link]").forEach(link => { link.href = RELEASES_PAGE; });
  }
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach(item => observer.observe(item));
}

function setupLightbox() {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Imagem ampliada. Clique ou aperte Esc para fechar.");
  const image = document.createElement("img");
  box.appendChild(image);
  document.body.appendChild(box);

  let opener = null;
  const close = () => {
    box.classList.remove("open");
    opener?.focus();
  };
  box.addEventListener("click", close);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && box.classList.contains("open")) close();
  });
  document.addEventListener("click", event => {
    const source = event.target.closest(".window img, img.zoomable");
    if (!source) return;
    event.preventDefault();
    opener = source;
    image.src = source.currentSrc || source.src;
    image.alt = source.alt;
    box.classList.add("open");
  });
  document.querySelectorAll(".window img").forEach(img => img.classList.add("zoomable"));
}

document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
setupHeader();
setupReveal();
setupLightbox();
fillReleaseInfo();

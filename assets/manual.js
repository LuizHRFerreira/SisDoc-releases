const ICONS = {
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  stethoscope: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
  clinic: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M12 9v6M9 12h6"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
  keyboard: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M7 15h10"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
};

const SUBJECTS = {
  "Agenda": { icon: "calendar", description: "Marcar, mudar e desmarcar consultas, encaixes, lista de espera e horários dos médicos." },
  "Atendimento": { icon: "stethoscope", description: "A tela do médico: anotação, receita, atestado e pedido de exames." },
  "Médico": { icon: "clinic", description: "Cadastros da clínica: médicos, convênios, remédios, modelos e acessos." },
  "Pacientes": { icon: "users", description: "Cadastro, ficha, prontuário, exames e anexos de cada paciente." },
  "Relatórios": { icon: "chart", description: "Consultas, faltas, convênios e aniversariantes por período." },
  "Uso geral": { icon: "info", description: "Letra, avisos, backup, outro computador e atualizações." },
};

const IMAGES = {
  "Como marcar uma consulta?": ["38-marcar-com-horarios-livres", "Janela de marcar consulta, com os horários livres do dia à direita."],
  "Como fazer um encaixe?": ["36-agenda-encaixe", "Agenda com duas consultas no mesmo horário, lado a lado."],
  "Como achar um horário livre?": ["35-horarios-livres", "Janela com os próximos dias com vaga e os horários livres de cada um."],
  "Como usar a lista de espera?": ["37-lista-de-espera", "Lista de espera com os pacientes e o botão Adiantar."],
  "Como cadastrar o horário de atendimento do médico?": ["33-horarios-do-medico", "Janela Horários e bloqueios, com os dias e horas de atendimento do médico."],
  "Como bloquear a agenda (férias, congresso, viagem)?": ["34-bloqueios", "Aba Bloqueios, com o período e o motivo do bloqueio."],
  "O paciente chegou. O que eu faço?": ["10-acoes-no-cartao", "Cartão da consulta aberto na agenda, com o botão Registrar chegada."],
  "Como mudar o dia, a hora ou os dados de uma consulta?": ["07-editar-consulta", "Janela de editar a consulta."],
  "Marquei uma consulta só com o nome. Como faço o cadastro completo?": ["17-novo-paciente-ao-lado", "Cadastro do paciente aberto ao lado da agenda."],
  "Como desmarcar uma consulta?": ["14-confirmar-exclusao", "Pergunta de confirmação antes de excluir a consulta."],
  "Quem é o próximo paciente?": ["09-agenda-proximo-e-atraso", "Agenda com a etiqueta Próximo e o aviso de atraso."],
  "Como ver a agenda de outro dia ou de vários dias?": ["32-agenda-varios-dias", "Agenda mostrando vários dias lado a lado."],
  "Como atender um paciente (médico)?": ["22-atendimento", "Tela de atendimento com a ficha do paciente e a aba Anotação."],
  "Como fazer uma receita?": ["23-atendimento-receita", "Aba Receita do atendimento, com remédios na receita."],
  "Como fazer um atestado?": ["24-atendimento-atestado", "Aba Atestado do atendimento."],
  "Como pedir exames?": ["27-atendimento-pedido-de-exames", "Aba Pedido de exames, com a lista de exames para marcar."],
  "Como criar ou mudar um modelo de atestado ou de exames?": ["29-modelos", "Janela de modelos de atestado."],
  "Como cadastrar um médico ou um convênio?": ["43-primeiros-passos-medico", "Tela Médicos e convênios, com o cadastro de um médico."],
  "Como cadastrar um medicamento?": ["25-medicamentos", "Catálogo de medicamentos."],
  "Como criar um acesso ou trocar uma senha?": ["26-acessos", "Janela Acessos e senhas."],
  "Como cadastrar um paciente novo?": ["06-novo-paciente", "Formulário de paciente novo."],
  "Como encontrar um paciente?": ["03-pacientes", "Tela Pacientes com a busca e a lista em ordem alfabética."],
  "Quando o paciente veio (e quando vem de novo)?": ["39-ficha-consultas", "Ficha do paciente na aba Consultas."],
  "Como imprimir o prontuário?": ["44-imprimir-prontuario", "Aba Prontuário com as opções de impressão por período ou por anotação."],
  "Como registrar o resultado de um exame?": ["19-resultado-de-exame", "Aba Exames da ficha do paciente."],
  "Como anexar um laudo, foto ou documento?": ["20-anexos", "Aba Anexos da ficha do paciente."],
  "Como tirar um relatório?": ["28-relatorios", "Tela de relatórios, com a lista de relatórios à esquerda."],
  "Um campo ficou vermelho. O que houve?": ["08-campos-com-erro", "Formulário com um campo em vermelho e a explicação embaixo."],
  "Como usar os dados de outro computador (ou voltar a usar os deste)?": ["10-assistente-conexao", "Tela para conectar aos dados de outro computador."],
  "Apareceu \"Nova versão do SisDoc\". O que eu faço?": ["40-atualizacao", "Janela de atualização baixando a versão nova."],
  "Posso deixar este manual aberto enquanto uso o SisDoc?": ["16-ajuda", "Manual aberto ao lado da agenda."],
};

const LEGEND = {
  scheduled: "#546E7A",
  late: "#B45309",
  arrived: "#2E7D32",
  arrivedLate: "#E65100",
  inProgress: "#7B1FA2",
  completed: "#1565C0",
  noShow: "#9C6B5E",
  next: "#31AF7D",
  followUp: "#143D30",
  firstVisit: "#8D6E00",
};

const POPULAR = [
  "Como marcar uma consulta?",
  "O paciente chegou. O que eu faço?",
  "Como fazer uma receita?",
  "Como encontrar um paciente?",
  "Como imprimir o prontuário?",
  "Como fazer um backup ou começar com um banco novo?",
];

const main = document.getElementById("manual-content");
const sidebarNav = document.getElementById("sidebar-nav");
const searchInput = document.getElementById("manual-search");
const sidebarToggle = document.querySelector(".sidebar-toggle");

let manual = null;
let subjects = [];

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.info}</svg>`;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function normalize(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function slugify(text) {
  return normalize(text).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const KEY = "(?:Ctrl|Alt|Shift|Enter|Delete|Esc|Mais|Menos|F\\d{1,2}|[A-Z0-9]|←|→)";
const COMBO = new RegExp(`\\b(?:Ctrl|Alt|Shift)(?: \\+ ${KEY})+|\\b(?:F1|F5|Esc|Enter|Delete)\\b`, "g");

function formatStep(text) {
  return escapeHtml(text)
    .replace(/&quot;([^&]+?)&quot;/g, "<b>$1</b>")
    .replace(COMBO, combo => combo.split(" + ").map(k => `<kbd>${k}</kbd>`).join(" + "));
}

function highlight(html, words) {
  if (words.length === 0) return html;
  const pattern = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  return html.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, text) => {
    if (tag) return tag;
    const plain = normalize(text);
    let result = "";
    let last = 0;
    const re = new RegExp(pattern, "g");
    let found;
    while ((found = re.exec(plain)) !== null) {
      if (found[0].length === 0) { re.lastIndex++; continue; }
      result += text.slice(last, found.index) + "<mark>" + text.slice(found.index, found.index + found[0].length) + "</mark>";
      last = found.index + found[0].length;
    }
    return result + text.slice(last);
  });
}

function topicUrl(topic) {
  return `#/${topic.subjectSlug}/${topic.slug}`;
}

function buildSidebar(currentHash) {
  sidebarNav.innerHTML = subjects.map(subject => {
    const open = currentHash.startsWith(`#/${subject.slug}`);
    return `
      <div class="nav-group" data-open="${open}">
        <button type="button" aria-expanded="${open}">${escapeHtml(subject.name)}${icon("chevron")}</button>
        <ul>
          ${subject.topics.map(t => `<li><a href="${topicUrl(t)}"${currentHash === topicUrl(t) ? ' aria-current="page"' : ""}>${escapeHtml(t.question)}</a></li>`).join("")}
        </ul>
      </div>`;
  }).join("") + `
    <div class="sidebar-extra">
      <a href="#/atalhos"${currentHash === "#/atalhos" ? ' aria-current="page"' : ""}>${icon("keyboard")}Atalhos de teclado</a>
    </div>`;
  sidebarNav.querySelectorAll(".nav-group > button").forEach(button => {
    button.addEventListener("click", () => {
      const group = button.parentElement;
      const open = group.dataset.open !== "true";
      group.dataset.open = String(open);
      button.setAttribute("aria-expanded", String(open));
    });
  });
}

function breadcrumb(parts) {
  const items = [`<a href="#/">Manual</a>`, ...parts];
  return `<nav class="breadcrumb" aria-label="Você está em">${items.join('<span aria-hidden="true">›</span>')}</nav>`;
}

function renderHome() {
  document.title = "Manual · SisDoc";
  const popular = POPULAR.map(q => manual.topics.find(t => t.question === q)).filter(Boolean);
  main.innerHTML = `
    <p class="eyebrow">Manual do SisDoc</p>
    <h1 tabindex="-1">Como podemos ajudar?</h1>
    <p class="lead" style="margin-top:-8px;margin-bottom:32px">Escolha um assunto ou procure pelo que precisa. É o mesmo manual que abre dentro do programa com <kbd>F1</kbd>.</p>
    <div class="subject-grid">
      ${subjects.map(s => `
        <a class="subject-card" href="#/${s.slug}">
          <span class="icon-badge">${icon(s.icon)}</span>
          <span><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.description)}</p></span>
        </a>`).join("")}
      <a class="subject-card" href="#/atalhos">
        <span class="icon-badge">${icon("keyboard")}</span>
        <span><h3>Atalhos de teclado</h3><p>Faça tudo mais rápido, sem tirar a mão do teclado.</p></span>
      </a>
    </div>
    <div class="related">
      <h2>Mais procurados</h2>
      <ul class="link-list">${popular.map(t => `<li><a href="${topicUrl(t)}">${escapeHtml(t.question)}</a></li>`).join("")}</ul>
    </div>`;
}

function renderSubject(subject) {
  document.title = `${subject.name} · Manual · SisDoc`;
  main.innerHTML = `
    ${breadcrumb([])}
    <h1 tabindex="-1">${escapeHtml(subject.name)}</h1>
    <p class="lead" style="margin-top:-8px;margin-bottom:28px">${escapeHtml(subject.description)}</p>
    <ul class="link-list">${subject.topics.map(t => `<li><a href="${topicUrl(t)}">${escapeHtml(t.question)}</a></li>`).join("")}</ul>`;
}

function renderTopic(topic) {
  document.title = `${topic.question} · Manual · SisDoc`;
  const index = manual.topics.indexOf(topic);
  const previous = manual.topics[index - 1];
  const next = manual.topics[index + 1];
  const subject = subjects.find(s => s.name === topic.subject);
  const image = IMAGES[topic.question];
  const single = topic.steps.length === 1;
  const others = subject.topics.filter(t => t !== topic).slice(0, 6);
  main.innerHTML = `
    ${breadcrumb([`<a href="#/${subject.slug}">${escapeHtml(subject.name)}</a>`])}
    <h1 tabindex="-1">${escapeHtml(topic.question)}</h1>
    <ol class="manual-steps${single ? " single" : ""}">${topic.steps.map(s => `<li>${formatStep(s)}</li>`).join("")}</ol>
    ${topic.colors.length ? `
      <ul class="legend">${topic.colors.map(c => `
        <li><span class="swatch" style="background:${LEGEND[c.color] || "#999"}"></span><span>${formatStep(c.meaning)}</span></li>`).join("")}
      </ul>` : ""}
    ${image ? `
      <figure class="manual-figure">
        <div class="window">
          <div class="window-bar" aria-hidden="true"><span></span><span></span><span></span></div>
          <img class="zoomable" src="images/${image[0]}.png" width="1280" height="800" loading="lazy" alt="${escapeHtml(image[1])}">
        </div>
        <figcaption>${escapeHtml(image[1])} Clique para ampliar.</figcaption>
      </figure>` : ""}
    ${others.length ? `
      <div class="related">
        <h2>Outras perguntas sobre ${escapeHtml(subject.name)}</h2>
        <ul class="link-list">${others.map(t => `<li><a href="${topicUrl(t)}">${escapeHtml(t.question)}</a></li>`).join("")}</ul>
      </div>` : ""}
    <nav class="pager" aria-label="Outras páginas do manual">
      ${previous ? `<a class="prev" href="${topicUrl(previous)}"><small>← Anterior</small>${escapeHtml(previous.question)}</a>` : ""}
      ${next ? `<a class="next" href="${topicUrl(next)}"><small>Próxima →</small>${escapeHtml(next.question)}</a>` : ""}
    </nav>`;
}

function renderShortcuts() {
  document.title = "Atalhos de teclado · Manual · SisDoc";
  main.innerHTML = `
    ${breadcrumb([])}
    <h1 tabindex="-1">Atalhos de teclado</h1>
    <p class="lead" style="margin-top:-8px;margin-bottom:32px">Aperte as teclas juntas. Por exemplo, <kbd>Ctrl</kbd> + <kbd>M</kbd>: segure <kbd>Ctrl</kbd> e aperte <kbd>M</kbd>.</p>
    ${manual.shortcutGroups.map(group => `
      <div class="shortcut-group">
        <h2>${escapeHtml(group.name)}</h2>
        <div class="table-wrap"><table>
          <tbody>${group.shortcuts.map(s => `
            <tr><td>${s.keys.map(k => `<kbd>${escapeHtml(k)}</kbd>`).join("<span>+</span>")}</td><td>${escapeHtml(s.whatItDoes)}</td></tr>`).join("")}
          </tbody>
        </table></div>
      </div>`).join("")}`;
}

function renderSearch(term) {
  const words = normalize(term).split(/\s+/).filter(Boolean);
  const matches = manual.topics.filter(t => words.every(w => t.searchText.includes(w)));
  document.title = `Procurar "${term}" · Manual · SisDoc`;
  main.innerHTML = `
    ${breadcrumb([`<span>Procurar</span>`])}
    <h1 tabindex="-1">${matches.length === 0 ? "Nada encontrado" : matches.length === 1 ? "1 resposta" : `${matches.length} respostas`} para “${escapeHtml(term)}”</h1>
    ${matches.length === 0 ? `
      <div class="empty">
        <p>Tente outra palavra, como <b>consulta</b>, <b>receita</b> ou <b>senha</b>.</p>
        <p style="margin:0">Dentro do SisDoc, o contato do suporte fica em <b>"Olá, seu nome" → Sobre o SisDoc</b>.</p>
      </div>` : `
      <ul class="link-list">${matches.map(t => {
        const step = t.steps.find(s => words.some(w => normalize(s).includes(w))) || t.steps[0];
        return `<li><a href="${topicUrl(t)}" style="display:block">
          <span class="small muted">${escapeHtml(t.subject)}</span><br>
          <b>${highlight(escapeHtml(t.question), words)}</b><br>
          <span class="small muted">${highlight(formatStep(step), words)}</span>
        </a></li>`;
      }).join("")}</ul>`}`;
}

function route({ focus = true } = {}) {
  const hash = decodeURIComponent(location.hash || "#/");
  const term = searchInput.value.trim();
  buildSidebar(hash);
  if (term) {
    renderSearch(term);
    return;
  }
  const [, subjectSlug, topicSlug] = hash.split("/");
  const subject = subjects.find(s => s.slug === subjectSlug);
  const topic = subject?.topics.find(t => t.slug === topicSlug);
  if (subjectSlug === "atalhos") renderShortcuts();
  else if (topic) renderTopic(topic);
  else if (subject) renderSubject(subject);
  else renderHome();
  if (focus) {
    window.scrollTo({ top: 0 });
    main.querySelector("h1")?.focus({ preventScroll: true });
  }
  sidebarNav.classList.remove("open");
  sidebarToggle.setAttribute("aria-expanded", "false");
}

async function start() {
  try {
    const response = await fetch("manual.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(String(response.status));
    manual = await response.json();
  } catch {
    main.innerHTML = `
      <h1>Não foi possível abrir o manual</h1>
      <p>Tente recarregar a página. Dentro do SisDoc, aperte <kbd>F1</kbd> para ver o mesmo manual.</p>`;
    return;
  }
  manual.topics.forEach(t => {
    t.slug = slugify(t.question);
    t.subjectSlug = slugify(t.subject);
    t.searchText = normalize([t.subject, t.question, ...t.steps, ...t.colors.map(c => c.meaning)].join(" "));
  });
  subjects = [...new Set(manual.topics.map(t => t.subject))].map(name => ({
    name,
    slug: slugify(name),
    icon: SUBJECTS[name]?.icon || "info",
    description: SUBJECTS[name]?.description || "",
    topics: manual.topics.filter(t => t.subject === name),
  }));

  let typing;
  searchInput.addEventListener("input", () => {
    clearTimeout(typing);
    typing = setTimeout(() => route({ focus: false }), 120);
  });
  searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      searchInput.value = "";
      route({ focus: false });
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "/" && document.activeElement !== searchInput && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      searchInput.focus();
    }
  });
  main.addEventListener("click", event => {
    if (event.target.closest("a[href^='#/']") && searchInput.value) searchInput.value = "";
  });
  sidebarNav.addEventListener("click", event => {
    if (event.target.closest("a[href^='#/']") && searchInput.value) searchInput.value = "";
  });
  sidebarToggle.addEventListener("click", () => {
    const open = sidebarNav.classList.toggle("open");
    sidebarToggle.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("hashchange", () => route());
  route({ focus: false });
}

start();

const STORAGE_KEY = "john-stoneheart-sheet-v2-phb2024";
const SORCERER_PREPARED_LIMIT = 6;

const abilityLabels = {
  str: "Força",
  dex: "Destreza",
  con: "Constituição",
  int: "Inteligência",
  wis: "Sabedoria",
  cha: "Carisma",
};

const skills = [
  { key: "acrobatics", label: "Acrobacia", ability: "dex" },
  { key: "animalHandling", label: "Lidar com Animais", ability: "wis" },
  { key: "arcana", label: "Arcanismo", ability: "int" },
  { key: "athletics", label: "Atletismo", ability: "str" },
  { key: "deception", label: "Enganação", ability: "cha" },
  { key: "history", label: "História", ability: "int" },
  { key: "insight", label: "Intuição", ability: "wis" },
  { key: "intimidation", label: "Intimidação", ability: "cha" },
  { key: "investigation", label: "Investigação", ability: "int" },
  { key: "medicine", label: "Medicina", ability: "wis" },
  { key: "nature", label: "Natureza", ability: "int" },
  { key: "perception", label: "Percepção", ability: "wis" },
  { key: "performance", label: "Atuação", ability: "cha" },
  { key: "persuasion", label: "Persuasão", ability: "cha" },
  { key: "religion", label: "Religião", ability: "int" },
  { key: "sleightOfHand", label: "Prestidigitação", ability: "dex" },
  { key: "stealth", label: "Furtividade", ability: "dex" },
  { key: "survival", label: "Sobrevivência", ability: "wis" },
];

const defaultSheet = {
  name: "John Stoneheart",
  pronouns: "",
  background: "Sábio",
  species: "Anão",
  className: "Feiticeiro",
  subclass: "Feitiçaria Selvagem",
  level: 3,
  xp: 1224,
  ac: 11,
  initiativeBonus: 1,
  speed: "9 m",
  size: "Médio, cerca de 1,50 m",
  profBonus: 2,
  hitDie: "d6",
  hitDiceSpent: 0,
  concept: `John é um feiticeiro anão com mais de 100 anos. Seu sonho sempre foi ser minerador, como a maior parte de seu povo esperava dele. Ele seguiu para a ilha da campanha em busca de pedras mágicas e minérios, tentando sentir que realizou, ao menos em parte, o dever que acreditava ter deixado para trás.\n\nSeus poderes foram dados pelos deuses, mas sua falta de vontade em cumprir o propósito de tornar o mundo um lugar melhor fez sua magia perder estabilidade. Ao longo dos anos, ela se tornou selvagem, consumindo mana para lançar feitiços que nem sempre John escolheu usar. Agora ele busca riquezas, pedras valiosas e talvez a chance de reacender uma chama que ainda não morreu dentro de seu coração.`,
  hp: { current: 10, max: 23, temp: 0 },
  sorcery: { current: 3, max: 3 },
  innateSorcery: { active: false, uses: 2, max: 2 },
  tidesOfChaos: { available: true },
  death: { successes: 0, failures: 0 },
  abilities: {
    str: { score: 10, saveProf: false },
    dex: { score: 13, saveProf: false },
    con: { score: 14, saveProf: true },
    int: { score: 15, saveProf: false },
    wis: { score: 14, saveProf: false },
    cha: { score: 16, saveProf: true },
  },
  skillProfs: {
    arcana: true,
    history: true,
    insight: true,
    persuasion: true,
  },
  spellcasting: { ability: "cha" },
  spellSlots: {
    1: { max: 4, used: 0, created: 0 },
    2: { max: 2, used: 0, created: 0 },
  },
  attacks: [
    { name: "Explosão Elemental", bonus: "magia", damage: "1d8", notes: "Truque de Feiticeiro. Ataque mágico." },
    { name: "Toque Chocante", bonus: "magia", damage: "1d8", notes: "Truque de Feiticeiro. Ataque mágico corpo a corpo." },
    { name: "Machado de mão +1", bonus: "+3", damage: "1d6+1", notes: "Arma simples. Se for machado de batalha, confirme proficiência com o mestre." },
  ],
  spells: [
    { level: 0, name: "Ilusão Menor", time: "Ação", tags: "S, M", notes: "Truque de Feiticeiro.", source: "Feiticeiro", prepared: true },
    { level: 0, name: "Prestidigitação Arcana", time: "Ação", tags: "V, S", notes: "Truque de Feiticeiro.", source: "Feiticeiro", prepared: true },
    { level: 0, name: "Explosão Elemental", time: "Ação", tags: "V, S", notes: "Truque de Feiticeiro. Dano: 1d8.", source: "Feiticeiro", prepared: true },
    { level: 0, name: "Toque Chocante", time: "Ação", tags: "V, S", notes: "Truque de Feiticeiro. Dano: 1d8.", source: "Feiticeiro", prepared: true },
    { level: 0, name: "Mãos Mágicas", time: "Ação", tags: "V, S", notes: "Truque vindo do talento Iniciado em Magia (Mago).", source: "Iniciado em Magia (Mago)", prepared: true, alwaysPrepared: true },
    { level: 0, name: "Reparar", time: "1 minuto", tags: "V, S, M", notes: "Truque vindo do talento Iniciado em Magia (Mago).", source: "Iniciado em Magia (Mago)", prepared: true, alwaysPrepared: true },
    { level: 1, name: "Escudo Arcano", time: "Reação", tags: "V, S", notes: "Escolha sugerida para Iniciado em Magia (Mago): sempre preparada, 1 conjuração grátis por Descanso Longo e também pode usar espaços.", source: "Iniciado em Magia (Mago)", prepared: true, alwaysPrepared: true },
    { level: 1, name: "Orbe Cromático", time: "Ação", tags: "V, S, M", notes: "Magia de Feiticeiro preparada. Dano: 3d8.", source: "Feiticeiro", prepared: true },
    { level: 1, name: "Mísseis Mágicos", time: "Ação", tags: "V, S", notes: "Magia de Feiticeiro preparada. Dano: 1d4+1 por dardo.", source: "Feiticeiro", prepared: true },
    { level: 1, name: "Raio de Bruxa", time: "Ação", tags: "V, S, M, Concentração", notes: "Magia de Feiticeiro preparada. Dano: 2d12.", source: "Feiticeiro", prepared: true },
    { level: 1, name: "Onda Trovejante", time: "Ação", tags: "V, S", notes: "Magia de Feiticeiro preparada. Boa para explosão de força ao redor de John.", source: "Feiticeiro", prepared: true },
    { level: 2, name: "Passo Nebuloso", time: "Ação bônus", tags: "V", notes: "Magia de Feiticeiro preparada. Teleporte curto.", source: "Feiticeiro", prepared: true },
    { level: 2, name: "Aumentar/Reduzir", time: "Ação", tags: "V, S, M, Concentração", notes: "Magia de Feiticeiro preparada. Combina com pedras, minérios e manipulação de objetos.", source: "Feiticeiro", prepared: true },
    { level: 2, name: "Sugestão", time: "Ação", tags: "V, M, Concentração", notes: "Magia válida de Feiticeiro, mas deixada como reserva porque o limite oficial no nível 3 é 6 magias de Feiticeiro preparadas.", source: "Feiticeiro", prepared: false },
    { level: 1, name: "Heroísmo", time: "Ação", tags: "V, S, Concentração", notes: "Não aparece na lista de Feiticeiro 2024. Use apenas se o mestre liberou por regra da campanha.", source: "Extra/legado", prepared: false, legacy: true },
    { level: 1, name: "Curar Ferimentos", time: "Ação", tags: "V, S", notes: "Não aparece na lista de Feiticeiro 2024. Use apenas se o mestre liberou por regra da campanha.", source: "Extra/legado", prepared: false, legacy: true },
    { level: 2, name: "Auxílio", time: "Ação", tags: "V, S, M", notes: "Não aparece na lista de Feiticeiro 2024. Use apenas se o mestre liberou por regra da campanha.", source: "Extra/legado", prepared: false, legacy: true },
  ],
  proficiencies: {
    weapons: "Armas simples.",
    armor: "Sem treinamento com armadura pela classe Feiticeiro.",
    tools: "Suprimentos de Calígrafo pelo antecedente Sábio.",
  },
  speciesTraits: "Anão: Visão no Escuro 36 m; Resistência a dano Venenoso e vantagem para evitar/encerrar Envenenado; Tenacidade Anã (+1 PV por nível, já considerado no máximo 23); Conhecimento de Pedras: Ação Bônus para Sismiconsciência 18 m por 10 min, usos iguais ao Bônus de Proficiência por Descanso Longo.",
  classFeatures: "Feiticeiro nível 3: Carisma como atributo de conjuração; salvaguardas proficientes em Constituição e Carisma; 4 truques de Feiticeiro; 6 magias de Feiticeiro preparadas; espaços 4 de 1º círculo e 2 de 2º círculo; 3 Pontos de Feitiçaria; Feitiçaria Inata 2 vezes por Descanso Longo; Metamagia: Magia Acelerada e Magia Agravada; subclasse Feitiçaria Selvagem com Marés do Caos e Surto de Magia Selvagem.",
  originFeatures: "Sábio: valores sugeridos Constituição, Inteligência e Sabedoria; Arcanismo e História; Suprimentos de Calígrafo; talento Iniciado em Magia (Mago).",
  equipment: "Botas que não fazem barulho. 1 pergaminho de Paralisar Pessoa. Disco multicolorido. 1 Poção de Cura (2d4+2 PV). Machado de mão +1. Equipamento do Sábio, caso usado pela opção A: cajado, suprimentos de calígrafo, livro de história, 8 folhas de pergaminho, túnica e 8 PO.",
  coins: { cp: 0, sp: 0, ep: 0, gp: 217, pp: 0 },
  appearance: "Anão feiticeiro idoso, resistente, marcado por anos de estrada e túneis. Usa capa escura com inscrições rúnicas douradas e carrega ferramentas e objetos arcanos como quem nunca abandonou totalmente o sonho de minerar.",
  personality: "Teimoso, cansado e dividido entre o chamado divino e o desejo simples de ser aceito como minerador. Por fora, pode parecer alguém fugindo do próprio destino. Por dentro, ainda existe uma chama esperando motivo para voltar a arder.",
  languages: "Anão.",
  attunement: "",
  ruleNotes: "Ajustado para Livro do Jogador 2024: CD de magia = 8 + proficiência + Carisma, ficando 13 normalmente e 14 com Feitiçaria Inata ativa. Ataques mágicos ficam +5 e recebem vantagem durante Feitiçaria Inata. O limite de magias de Feiticeiro preparadas no nível 3 é 6; magias extras antigas foram mantidas como reserva/legado, não como padrão oficial.",
  rollLog: [],
};

let sheet = loadSheet();
let currentSpellFilter = "all";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      target[key] = deepMerge(target[key] ?? {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function loadSheet() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return clone(defaultSheet);
  try {
    return deepMerge(clone(defaultSheet), JSON.parse(raw));
  } catch {
    return clone(defaultSheet);
  }
}

function saveSheet(show = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sheet));
  if (show) flashSaveStatus("Salvo localmente");
}

function flashSaveStatus(text) {
  const el = document.getElementById("saveStatus");
  if (!el) return;
  el.textContent = text;
  el.classList.add("good");
  window.setTimeout(() => el.classList.remove("good"), 700);
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

function setPath(obj, path, value) {
  const parts = path.split(".");
  let cursor = obj;
  for (const part of parts.slice(0, -1)) {
    if (!cursor[part]) cursor[part] = {};
    cursor = cursor[part];
  }
  cursor[parts.at(-1)] = value;
}

function mod(score) {
  return Math.floor((Number(score) - 10) / 2);
}

function fmt(num) {
  const n = Number(num) || 0;
  return n >= 0 ? `+${n}` : `${n}`;
}

function abilityMod(ability) {
  return mod(sheet.abilities[ability]?.score ?? 10);
}

function skillBonus(skill) {
  return abilityMod(skill.ability) + (sheet.skillProfs[skill.key] ? Number(sheet.profBonus) || 0 : 0);
}

function saveBonus(ability) {
  return abilityMod(ability) + (sheet.abilities[ability]?.saveProf ? Number(sheet.profBonus) || 0 : 0);
}

function spellMod() {
  return abilityMod(sheet.spellcasting.ability);
}

function isInnateActive() {
  return Boolean(sheet.innateSorcery?.active);
}

function spellDC() {
  return 8 + (Number(sheet.profBonus) || 0) + spellMod() + (isInnateActive() ? 1 : 0);
}

function spellAttack() {
  return (Number(sheet.profBonus) || 0) + spellMod();
}

function bindInputs() {
  document.querySelectorAll("[data-bind]").forEach((input) => {
    const path = input.dataset.bind;
    const value = getPath(sheet, path);
    if (input.type === "checkbox") input.checked = Boolean(value);
    else input.value = value ?? "";

    input.addEventListener("input", () => {
      const next = input.type === "number" ? Number(input.value) : input.value;
      setPath(sheet, path, next);
      saveSheet(false);
      renderDynamic();
    });

    input.addEventListener("change", () => saveSheet());
  });
}

function renderDynamic() {
  renderVitals();
  renderAbilities();
  renderSpellcasting();
  renderSpellSlots();
  renderAttacks();
  renderSpells();
}

function renderVitals() {
  document.getElementById("hpCurrentText").textContent = Number(sheet.hp.current) || 0;
  document.getElementById("hpMaxText").textContent = Number(sheet.hp.max) || 0;
  document.getElementById("spCurrentText").textContent = Number(sheet.sorcery.current) || 0;
  document.getElementById("spMaxText").textContent = Number(sheet.sorcery.max) || 0;
  const perception = skills.find((s) => s.key === "perception");
  document.getElementById("passivePerception").textContent = 10 + skillBonus(perception);
  renderDeathChecks();
}

function renderDeathChecks() {
  const successEl = document.getElementById("deathSuccesses");
  const failureEl = document.getElementById("deathFailures");
  successEl.innerHTML = "";
  failureEl.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    const s = document.createElement("button");
    s.type = "button";
    s.className = `dot-check ${sheet.death.successes >= i ? "active" : ""}`;
    s.textContent = "◆";
    s.addEventListener("click", () => {
      sheet.death.successes = sheet.death.successes === i ? i - 1 : i;
      saveSheet();
      renderDeathChecks();
    });
    successEl.appendChild(s);

    const f = document.createElement("button");
    f.type = "button";
    f.className = `dot-check ${sheet.death.failures >= i ? "active" : ""}`;
    f.textContent = "◆";
    f.addEventListener("click", () => {
      sheet.death.failures = sheet.death.failures === i ? i - 1 : i;
      saveSheet();
      renderDeathChecks();
    });
    failureEl.appendChild(f);
  }
}

function renderAbilities() {
  const wrap = document.getElementById("abilitiesGrid");
  wrap.innerHTML = "";

  for (const ability of Object.keys(abilityLabels)) {
    const card = document.createElement("article");
    card.className = "ability-card";
    const relatedSkills = skills.filter((skill) => skill.ability === ability);
    card.innerHTML = `
      <div class="ability-head">
        <div>
          <div class="ability-name">${abilityLabels[ability]}</div>
          <button class="mini ability-roll" type="button">Rolar atributo</button>
        </div>
        <div class="ability-mod">${fmt(abilityMod(ability))}</div>
      </div>
      <div class="ability-body">
        <label>Valor
          <input class="ability-score" type="number" value="${sheet.abilities[ability].score}" />
        </label>
        <label class="save-row">
          <span class="skill-left"><input class="save-prof" type="checkbox" ${sheet.abilities[ability].saveProf ? "checked" : ""}/> Salvaguarda</span>
          <span><button class="mini save-roll" type="button">Rolar</button> <span class="skill-score">${fmt(saveBonus(ability))}</span></span>
        </label>
        ${relatedSkills.map((skill) => `
          <label class="skill-row">
            <span class="skill-left"><input class="skill-prof" data-skill="${skill.key}" type="checkbox" ${sheet.skillProfs[skill.key] ? "checked" : ""}/> ${skill.label}</span>
            <span><button class="mini skill-roll" data-skill="${skill.key}" type="button">Rolar</button> <span class="skill-score">${fmt(skillBonus(skill))}</span></span>
          </label>
        `).join("")}
      </div>
    `;

    card.querySelector(".ability-score").addEventListener("input", (event) => {
      sheet.abilities[ability].score = Number(event.target.value);
      saveSheet(false);
      renderDynamic();
    });

    card.querySelector(".save-prof").addEventListener("change", (event) => {
      sheet.abilities[ability].saveProf = event.target.checked;
      saveSheet();
      renderDynamic();
    });

    card.querySelector(".ability-roll").addEventListener("click", () => rollAndLog(`Teste de ${abilityLabels[ability]}`, `1d20${fmt(abilityMod(ability))}`));
    card.querySelector(".save-roll").addEventListener("click", () => rollAndLog(`Salvaguarda de ${abilityLabels[ability]}`, `1d20${fmt(saveBonus(ability))}`));

    card.querySelectorAll(".skill-prof").forEach((checkbox) => {
      checkbox.addEventListener("change", (event) => {
        sheet.skillProfs[event.target.dataset.skill] = event.target.checked;
        saveSheet();
        renderDynamic();
      });
    });

    card.querySelectorAll(".skill-roll").forEach((button) => {
      button.addEventListener("click", () => {
        const skill = skills.find((item) => item.key === button.dataset.skill);
        rollAndLog(skill.label, `1d20${fmt(skillBonus(skill))}`);
      });
    });

    wrap.appendChild(card);
  }
}

function renderSpellcasting() {
  document.getElementById("spellMod").textContent = fmt(spellMod());
  document.getElementById("spellDC").textContent = spellDC();
  document.getElementById("spellAttack").textContent = fmt(spellAttack());

  const innateStatus = document.getElementById("innateStatus");
  if (innateStatus) {
    const uses = Number(sheet.innateSorcery?.uses) || 0;
    const max = Number(sheet.innateSorcery?.max) || 2;
    innateStatus.innerHTML = `${isInnateActive() ? "<strong>Ativa</strong>" : "Inativa"} • usos ${uses}/${max} • CD atual ${spellDC()} • ataques mágicos ${isInnateActive() ? "com vantagem" : "normais"}`;
  }

  const tidesStatus = document.getElementById("tidesStatus");
  if (tidesStatus) {
    tidesStatus.innerHTML = sheet.tidesOfChaos?.available
      ? "<strong>Disponível</strong> para dar vantagem em um Teste de D20."
      : "<strong>Usada.</strong> A próxima magia de Feiticeiro com espaço causa Surto automático e recarrega Marés do Caos.";
  }
}

function renderSpellSlots() {
  const wrap = document.getElementById("spellSlots");
  wrap.innerHTML = "";
  for (const level of Object.keys(sheet.spellSlots).sort((a, b) => Number(a) - Number(b))) {
    const slot = sheet.spellSlots[level];
    const card = document.createElement("article");
    card.className = "slot-card";
    const used = Number(slot.used) || 0;
    const max = Number(slot.max) || 0;
    const created = Number(slot.created) || 0;
    card.innerHTML = `
      <h3>${level}º círculo<span>${Math.max(max - used, 0)}/${max}</span></h3>
      <div class="slot-pips">${Array.from({ length: max }, (_, index) => `<span class="slot-pip ${index < used ? "used" : ""}"></span>`).join("")}</div>
      <p class="mini-note">${created ? `${created} espaço(s) criado(s) por Fonte de Magia até o próximo Descanso Longo.` : "Espaços oficiais/atuais."}</p>
      <div class="slot-controls">
        <button class="mini use-slot">Usar</button>
        <button class="mini restore-slot">Voltar</button>
        <input class="slot-max" type="number" min="0" value="${max}" title="Máximo" />
      </div>
    `;
    card.querySelector(".use-slot").addEventListener("click", () => {
      slot.used = Math.min(max, used + 1);
      saveSheet();
      renderSpellSlots();
    });
    card.querySelector(".restore-slot").addEventListener("click", () => {
      slot.used = Math.max(0, used - 1);
      saveSheet();
      renderSpellSlots();
    });
    card.querySelector(".slot-max").addEventListener("input", (event) => {
      slot.max = Number(event.target.value);
      slot.used = Math.min(slot.used, slot.max);
      saveSheet(false);
      renderSpellSlots();
    });
    wrap.appendChild(card);
  }
}

function renderAttacks() {
  const body = document.getElementById("attacksBody");
  body.innerHTML = "";
  const template = document.getElementById("editableRowTemplate");

  sheet.attacks.forEach((attack, index) => {
    const row = template.content.firstElementChild.cloneNode(true);
    row.querySelector(".row-name").value = attack.name;
    row.querySelector(".row-bonus").value = attack.bonus;
    row.querySelector(".row-damage").value = attack.damage;
    row.querySelector(".row-notes").value = attack.notes;

    row.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", () => {
        sheet.attacks[index] = {
          name: row.querySelector(".row-name").value,
          bonus: row.querySelector(".row-bonus").value,
          damage: row.querySelector(".row-damage").value,
          notes: row.querySelector(".row-notes").value,
        };
        saveSheet(false);
      });
    });

    row.querySelector(".attack-roll").addEventListener("click", () => {
      const isSpellAttack = String(sheet.attacks[index].bonus).trim().toLowerCase() === "magia";
      const bonus = isSpellAttack ? spellAttack() : parseSignedNumber(sheet.attacks[index].bonus);
      const mode = isSpellAttack && isInnateActive() ? "adv" : "normal";
      const suffix = isSpellAttack && isInnateActive() ? " (Feitiçaria Inata)" : "";
      rollAndLog(`Ataque: ${sheet.attacks[index].name}${suffix}`, `1d20${fmt(bonus)}`, mode);
    });

    row.querySelector(".damage-roll").addEventListener("click", () => {
      const expr = extractDice(sheet.attacks[index].damage);
      if (!expr) return addLog(`Dano: ${sheet.attacks[index].name}`, "Nenhuma expressão de dado encontrada.");
      rollAndLog(`Dano: ${sheet.attacks[index].name}`, expr);
    });

    row.querySelector(".remove-row").addEventListener("click", () => {
      sheet.attacks.splice(index, 1);
      saveSheet();
      renderAttacks();
    });

    body.appendChild(row);
  });
}

function renderSpells() {
  const list = document.getElementById("spellsList");
  const search = document.getElementById("spellSearch")?.value?.trim()?.toLowerCase() ?? "";
  const summary = document.getElementById("spellPrepSummary");
  const preparedSorcerer = sheet.spells.filter((spell) => Number(spell.level) > 0 && spell.source === "Feiticeiro" && spell.prepared).length;
  const extraAlways = sheet.spells.filter((spell) => spell.alwaysPrepared && Number(spell.level) > 0).length;
  if (summary) {
    summary.innerHTML = `Magias de Feiticeiro preparadas: <strong>${preparedSorcerer}/${SORCERER_PREPARED_LIMIT}</strong>. Extras sempre preparadas por talento: <strong>${extraAlways}</strong>.`;
    summary.classList.toggle("bad", preparedSorcerer > SORCERER_PREPARED_LIMIT);
  }

  list.innerHTML = "";

  sheet.spells
    .filter((spell) => currentSpellFilter === "all" || String(spell.level) === currentSpellFilter)
    .filter((spell) => !search || `${spell.name} ${spell.time} ${spell.tags} ${spell.notes} ${spell.source ?? ""}`.toLowerCase().includes(search))
    .forEach((spell) => {
      const realIndex = sheet.spells.indexOf(spell);
      const card = document.createElement("article");
      card.className = `spell-card ${spell.legacy ? "legacy" : ""}`;
      card.innerHTML = `
        <div class="spell-level">${spell.level === 0 ? "T" : spell.level}</div>
        <div>
          <h3 contenteditable="true" class="spell-name">${escapeHtml(spell.name)}</h3>
          <div class="spell-meta">
            <span>Nível <strong class="spell-level-text" contenteditable="true">${spell.level}</strong></span>
            <span>Tempo: <strong class="spell-time" contenteditable="true">${escapeHtml(spell.time)}</strong></span>
            <span class="spell-tags" contenteditable="true">${escapeHtml(spell.tags)}</span>
            <span>${escapeHtml(spell.source ?? "Manual")}</span>
            <span>${spell.prepared ? "Preparada" : "Reserva"}</span>
            ${spell.alwaysPrepared ? "<span>Sempre preparada</span>" : ""}
          </div>
          <p class="spell-notes" contenteditable="true">${escapeHtml(spell.notes)}</p>
        </div>
        <div class="spell-actions">
          <button class="mini cast-spell">Usar</button>
          <button class="mini roll-spell-damage">Dano/Cura</button>
          <button class="mini toggle-prepared">${spell.prepared ? "Reserva" : "Preparar"}</button>
          <button class="mini ghost remove-spell">×</button>
        </div>
      `;

      const syncSpell = () => {
        sheet.spells[realIndex] = {
          ...sheet.spells[realIndex],
          level: Number(card.querySelector(".spell-level-text").textContent.trim()) || 0,
          name: card.querySelector(".spell-name").textContent.trim(),
          time: card.querySelector(".spell-time").textContent.trim(),
          tags: card.querySelector(".spell-tags").textContent.trim(),
          notes: card.querySelector(".spell-notes").textContent.trim(),
        };
        saveSheet(false);
      };

      card.querySelectorAll("[contenteditable]").forEach((field) => {
        field.addEventListener("input", syncSpell);
        field.addEventListener("blur", () => {
          syncSpell();
          saveSheet();
          renderSpells();
        });
      });

      card.querySelector(".cast-spell").addEventListener("click", () => castSpell(realIndex));
      card.querySelector(".roll-spell-damage").addEventListener("click", () => {
        const expr = extractDice(`${spell.notes} ${spell.name}`);
        if (!expr) return addLog(`Magia: ${spell.name}`, "Nenhuma expressão de dado encontrada.");
        rollAndLog(`Dano/Cura: ${spell.name}`, expr);
      });
      card.querySelector(".toggle-prepared").addEventListener("click", () => {
        sheet.spells[realIndex].prepared = !sheet.spells[realIndex].prepared;
        saveSheet();
        renderSpells();
      });
      card.querySelector(".remove-spell").addEventListener("click", () => {
        sheet.spells.splice(realIndex, 1);
        saveSheet();
        renderSpells();
      });

      list.appendChild(card);
    });
}

function castSpell(index) {
  const spell = sheet.spells[index];
  if (!spell) return;
  if (Number(spell.level) === 0) {
    addLog(`Magia: ${spell.name}`, "Truque usado. Não consome espaço de magia.");
    return;
  }

  const slot = sheet.spellSlots[spell.level];
  if (!slot) {
    addLog(`Magia: ${spell.name}`, `Não existe controle de espaços para ${spell.level}º círculo.`);
    return;
  }
  if ((Number(slot.used) || 0) >= (Number(slot.max) || 0)) {
    addLog(`Magia: ${spell.name}`, `Sem espaços disponíveis de ${spell.level}º círculo.`);
    return;
  }

  slot.used += 1;
  let extra = `Consumiu 1 espaço de ${spell.level}º círculo. Restam ${slot.max - slot.used}/${slot.max}.`;

  if (spell.source === "Feiticeiro" && !sheet.tidesOfChaos?.available) {
    sheet.tidesOfChaos.available = true;
    const d100 = randomInt(1, 100);
    extra += `<br><strong>Marés do Caos:</strong> Surto automático ativado. Resultado d100: <strong>${d100}</strong>. Consulte a tabela Surto de Magia Selvagem do livro.`;
  } else if (spell.source === "Feiticeiro") {
    extra += "<br>Após conjurar com espaço, você pode usar o botão de Surto oficial uma vez neste turno.";
  }

  saveSheet();
  refreshAll();
  addLog(`Magia: ${spell.name}`, extra);
}

function parseSignedNumber(value) {
  const match = String(value ?? "").match(/[+-]?\d+/);
  return match ? Number(match[0]) : 0;
}

function extractDice(text) {
  const match = String(text ?? "").match(/\d*d\d+(?:\s*[+-]\s*\d+)?/i);
  return match ? match[0].replace(/\s+/g, "") : "";
}

function rollDiceExpression(expression, mode = "normal") {
  const clean = String(expression).replace(/\s+/g, "").toLowerCase();
  const diceRegex = /([+-]?)(\d*)d(\d+)/g;
  let total = 0;
  let details = [];
  let match;
  let foundDice = false;

  while ((match = diceRegex.exec(clean)) !== null) {
    foundDice = true;
    const sign = match[1] === "-" ? -1 : 1;
    const count = Number(match[2] || 1);
    const sides = Number(match[3]);
    if (count <= 0 || sides <= 0 || count > 100 || sides > 1000) {
      throw new Error("Expressão de dados fora do limite seguro.");
    }

    let rolls = Array.from({ length: count }, () => randomInt(1, sides));
    if (count === 1 && sides === 20 && mode !== "normal") {
      const first = rolls[0];
      const second = randomInt(1, 20);
      const chosen = mode === "adv" ? Math.max(first, second) : Math.min(first, second);
      rolls = [chosen];
      details.push(`${mode === "adv" ? "vantagem" : "desvantagem"}: ${first}/${second} ⇒ ${chosen}`);
    } else {
      details.push(`${sign < 0 ? "-" : ""}${count}d${sides}: [${rolls.join(", ")}]`);
    }
    total += sign * rolls.reduce((sum, value) => sum + value, 0);
  }

  if (!foundDice) {
    throw new Error("Use uma expressão como 1d20+5, 2d12 ou 3d8+3.");
  }

  const withoutDice = clean.replace(diceRegex, "");
  const modifiers = withoutDice.match(/[+-]?\d+/g) ?? [];
  for (const modifier of modifiers) {
    total += Number(modifier);
    details.push(`mod: ${modifier}`);
  }

  return { total, details, expression: clean };
}

function randomInt(min, max) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return min + (array[0] % (max - min + 1));
}

function rollAndLog(title, expression, mode = "normal") {
  try {
    const result = rollDiceExpression(expression, mode);
    addLog(title, `<strong>${result.total}</strong> <span class="muted">(${result.expression}; ${result.details.join("; ")})</span>`);
  } catch (error) {
    addLog(title, error.message);
  }
}

function addLog(title, html) {
  const entry = {
    time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    title,
    html,
  };
  sheet.rollLog.unshift(entry);
  sheet.rollLog = sheet.rollLog.slice(0, 80);
  saveSheet(false);
  renderLog();
}

function renderLog() {
  const log = document.getElementById("rollLog");
  log.innerHTML = "";
  sheet.rollLog.forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${escapeHtml(entry.title)}</strong> <span class="muted">${escapeHtml(entry.time)}</span><br>${entry.html}`;
    log.appendChild(li);
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function spendSorcery(cost, label = "Pontos de Feitiçaria") {
  if (sheet.sorcery.current < cost) {
    addLog(label, `John não tem pontos suficientes. Custo: ${cost}.`);
    return false;
  }
  sheet.sorcery.current -= cost;
  saveSheet();
  refreshAll();
  addLog(label, `Gastou ${cost}. Restam ${sheet.sorcery.current}/${sheet.sorcery.max}.`);
  return true;
}

function createSpellSlot(level, cost) {
  if (!sheet.spellSlots[level]) return;
  if (sheet.sorcery.current < cost) {
    addLog("Fonte de Magia", `Pontos insuficientes para criar espaço de ${level}º círculo. Custo: ${cost}.`);
    return;
  }
  sheet.sorcery.current -= cost;
  sheet.spellSlots[level].max += 1;
  sheet.spellSlots[level].created = (Number(sheet.spellSlots[level].created) || 0) + 1;
  saveSheet();
  refreshAll();
  addLog("Fonte de Magia", `Criou 1 espaço de ${level}º círculo por ${cost} Pontos de Feitiçaria. Ele desaparece no próximo Descanso Longo.`);
}

function convertSlotToSorcery(level) {
  const slot = sheet.spellSlots[level];
  if (!slot) return;
  const available = (Number(slot.max) || 0) - (Number(slot.used) || 0);
  if (available <= 0) {
    addLog("Fonte de Magia", `Sem espaço disponível de ${level}º círculo para converter.`);
    return;
  }
  if (sheet.sorcery.current >= sheet.sorcery.max) {
    addLog("Fonte de Magia", "Pontos de Feitiçaria já estão no máximo.");
    return;
  }
  slot.used += 1;
  sheet.sorcery.current = Math.min(sheet.sorcery.max, sheet.sorcery.current + Number(level));
  saveSheet();
  refreshAll();
  addLog("Fonte de Magia", `Converteu 1 espaço de ${level}º círculo em ${level} Ponto(s) de Feitiçaria.`);
}

function promptNumber(message, fallback = 0) {
  const value = window.prompt(message, String(fallback));
  if (value === null) return null;
  const number = Number(value.replace?.(",", ".") ?? value);
  return Number.isFinite(number) ? number : null;
}

function applyDamage() {
  const amount = promptNumber("Quanto dano John recebeu?", 0);
  if (amount === null) return;
  let remaining = amount;
  const tempAbsorb = Math.min(sheet.hp.temp, remaining);
  sheet.hp.temp -= tempAbsorb;
  remaining -= tempAbsorb;
  sheet.hp.current = Math.max(0, sheet.hp.current - remaining);
  saveSheet();
  refreshAll();
  addLog("Dano recebido", `${amount} de dano. PV atuais: ${sheet.hp.current}/${sheet.hp.max}.`);
}

function applyHeal() {
  const amount = promptNumber("Quanto John curou?", 0);
  if (amount === null) return;
  sheet.hp.current = Math.min(sheet.hp.max, sheet.hp.current + amount);
  saveSheet();
  refreshAll();
  addLog("Cura recebida", `${amount} de cura. PV atuais: ${sheet.hp.current}/${sheet.hp.max}.`);
}

function longRest() {
  sheet.hp.current = sheet.hp.max;
  sheet.hp.temp = 0;
  sheet.sorcery.current = sheet.sorcery.max;
  sheet.innateSorcery.active = false;
  sheet.innateSorcery.uses = sheet.innateSorcery.max;
  sheet.tidesOfChaos.available = true;
  for (const slot of Object.values(sheet.spellSlots)) {
    const created = Number(slot.created) || 0;
    slot.max = Math.max(0, (Number(slot.max) || 0) - created);
    slot.created = 0;
    slot.used = 0;
  }
  saveSheet();
  refreshAll();
  addLog("Descanso Longo", "PV, Pontos de Feitiçaria, Feitiçaria Inata, Marés do Caos e espaços de magia restaurados. Espaços criados por Fonte de Magia desapareceram.");
}

function refreshAll() {
  document.querySelectorAll("[data-bind]").forEach((input) => {
    const value = getPath(sheet, input.dataset.bind);
    if (input.type === "checkbox") input.checked = Boolean(value);
    else input.value = value ?? "";
  });
  renderDynamic();
  renderLog();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(sheet, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "john-stoneheart-ficha-phb2024.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      sheet = deepMerge(clone(defaultSheet), imported);
      saveSheet();
      refreshAll();
      addLog("Importação", "Ficha importada com sucesso.");
    } catch {
      window.alert("Não consegui importar esse JSON.");
    }
  };
  reader.readAsText(file);
}

function activateInnateSorcery() {
  if (sheet.innateSorcery.active) {
    addLog("Feitiçaria Inata", "Já está ativa.");
    return;
  }
  if ((Number(sheet.innateSorcery.uses) || 0) <= 0) {
    addLog("Feitiçaria Inata", "Sem usos restantes até o próximo Descanso Longo.");
    return;
  }
  sheet.innateSorcery.uses -= 1;
  sheet.innateSorcery.active = true;
  saveSheet();
  refreshAll();
  addLog("Feitiçaria Inata", `Ativada por 1 minuto. CD de magia agora ${spellDC()} e ataques mágicos têm vantagem.`);
}

function endInnateSorcery() {
  sheet.innateSorcery.active = false;
  saveSheet();
  refreshAll();
  addLog("Feitiçaria Inata", "Encerrada.");
}

function useTidesOfChaos() {
  if (!sheet.tidesOfChaos.available) {
    addLog("Marés do Caos", "Já foi usada. Conjure uma magia de Feiticeiro com espaço para causar Surto automático e recarregar.");
    return;
  }
  sheet.tidesOfChaos.available = false;
  saveSheet();
  refreshAll();
  addLog("Marés do Caos", "Use antes de um Teste de D20 para ter vantagem. A próxima magia de Feiticeiro com espaço antes do Descanso Longo causa Surto automático e recarrega Marés do Caos.");
}

function wildSurgeCheck() {
  const result = rollDiceExpression("1d20");
  if (result.total === 20) {
    const d100 = randomInt(1, 100);
    addLog("Surto de Magia Selvagem", `<strong>${result.total}</strong> no d20: Surto ativado. Resultado d100: <strong>${d100}</strong>. Consulte a tabela do livro.`);
  } else {
    addLog("Surto de Magia Selvagem", `<strong>${result.total}</strong> no d20: sem surto. Pelo Livro do Jogador 2024, o surto acontece no 20.`);
  }
}

function rollWildSurgeTable() {
  const d100 = randomInt(1, 100);
  addLog("Tabela de Surto", `Resultado d100: <strong>${d100}</strong>. Consulte a tabela Surto de Magia Selvagem do livro.`);
}

function setupActions() {
  document.body.addEventListener("click", (event) => {
    const action = event.target?.dataset?.action;
    const roll = event.target?.dataset?.roll;
    if (!action && !roll) return;

    if (action === "quick-save") saveSheet(true);
    if (action === "export-json") exportJson();
    if (action === "reset-sheet") {
      if (window.confirm("Resetar a ficha para o padrão inicial de John pelo Livro do Jogador 2024?")) {
        sheet = clone(defaultSheet);
        saveSheet();
        refreshAll();
      }
    }
    if (action === "damage") applyDamage();
    if (action === "heal") applyHeal();
    if (action === "full-heal") longRest();
    if (action === "spend-sp") spendSorcery(Number(event.target.dataset.cost), event.target.textContent.trim());
    if (action === "create-slot") createSpellSlot(Number(event.target.dataset.level), Number(event.target.dataset.cost));
    if (action === "slot-to-sp") convertSlotToSorcery(Number(event.target.dataset.level));
    if (action === "activate-innate") activateInnateSorcery();
    if (action === "end-innate") endInnateSorcery();
    if (action === "use-tides") useTidesOfChaos();
    if (action === "add-attack") {
      sheet.attacks.push({ name: "Novo ataque", bonus: "magia", damage: "1d6", notes: "" });
      saveSheet();
      renderAttacks();
    }
    if (action === "add-spell") {
      sheet.spells.push({ level: 1, name: "Nova magia", time: "Ação", tags: "", notes: "", source: "Manual", prepared: false });
      saveSheet();
      renderSpells();
    }
    if (action === "custom-roll") rollAndLog("Rolagem personalizada", document.getElementById("customRoll").value);
    if (action === "custom-roll-adv") rollAndLog("Rolagem personalizada com vantagem", document.getElementById("customRoll").value, "adv");
    if (action === "custom-roll-dis") rollAndLog("Rolagem personalizada com desvantagem", document.getElementById("customRoll").value, "dis");
    if (action === "clear-log") {
      sheet.rollLog = [];
      saveSheet();
      renderLog();
    }
    if (action === "wild-surge-check") wildSurgeCheck();
    if (action === "wild-surge-table") rollWildSurgeTable();

    if (roll === "initiative") rollAndLog("Iniciativa", `1d20${fmt(Number(sheet.initiativeBonus) || abilityMod("dex"))}`);
    if (roll === "hit-die") rollAndLog("Dado de Vida", sheet.hitDie || "1d6");
  });

  document.getElementById("importFile").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importJson(file);
    event.target.value = "";
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentSpellFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSpells();
    });
  });

  document.getElementById("spellSearch").addEventListener("input", renderSpells);
}

function init() {
  bindInputs();
  setupActions();
  renderDynamic();
  renderLog();
}

init();

const STORAGE_KEY = "john-stoneheart-sheet-v1";

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
  subclass: "Magia Selvagem",
  level: 3,
  xp: 1224,
  ac: 11,
  initiativeBonus: 1,
  speed: "9 m",
  size: "1,50 m",
  profBonus: 2,
  hitDie: "d6",
  hitDiceSpent: 0,
  concept: `John é um feiticeiro anão com mais de 100 anos. Seu sonho sempre foi ser minerador, como a maior parte de seu povo esperava dele. Ele seguiu para a ilha da campanha em busca de pedras mágicas e minérios, tentando sentir que realizou, ao menos em parte, o dever que acreditava ter deixado para trás.\n\nSeus poderes foram dados pelos deuses, mas sua falta de vontade em cumprir o propósito de tornar o mundo um lugar melhor fez sua magia perder estabilidade. Ao longo dos anos, ela se tornou selvagem, consumindo mana para lançar feitiços que nem sempre John escolheu usar. Agora ele busca riquezas, pedras valiosas e talvez a chance de reacender uma chama que ainda não morreu dentro de seu coração.`,
  hp: { current: 10, max: 23, temp: 0 },
  sorcery: { current: 3, max: 3 },
  death: { successes: 0, failures: 0 },
  abilities: {
    str: { score: 10, saveProf: false },
    dex: { score: 13, saveProf: false },
    con: { score: 14, saveProf: false },
    int: { score: 15, saveProf: false },
    wis: { score: 14, saveProf: false },
    cha: { score: 16, saveProf: false },
  },
  skillProfs: {
    arcana: true,
    history: true,
    nature: true,
    insight: true,
    persuasion: true,
  },
  spellcasting: { ability: "cha" },
  spellSlots: {
    1: { max: 5, used: 0 },
    2: { max: 2, used: 0 },
  },
  attacks: [
    { name: "Explosão Elemental", bonus: "magia", damage: "1d8", notes: "Truque, dano elemental" },
    { name: "Toque Chocante", bonus: "magia", damage: "1d8", notes: "Truque, elétrico" },
    { name: "Machado +1", bonus: "+3", damage: "1d8+1", notes: "Arma carregada por John" },
  ],
  spells: [
    { level: 0, name: "Mãos Mágicas", time: "Ação", tags: "V, S", notes: "Manipulação mágica à distância." },
    { level: 0, name: "Ilusão Menor", time: "Ação", tags: "S, M", notes: "Cria uma pequena ilusão visual ou sonora." },
    { level: 0, name: "Reparar", time: "1 minuto", tags: "V, S, M", notes: "Conserta um objeto danificado." },
    { level: 0, name: "Prestidigitação Arcana", time: "Ação", tags: "V, S", notes: "Pequenos efeitos mágicos úteis e teatrais." },
    { level: 0, name: "Explosão Elemental", time: "Ação", tags: "V, S", notes: "Ataque mágico. Dano: 1d8." },
    { level: 0, name: "Toque Chocante", time: "Ação", tags: "V, S", notes: "Ataque mágico. Dano: 1d8." },
    { level: 1, name: "Orbe Cromático", time: "Ação", tags: "V, S, M", notes: "Dano: 3d8." },
    { level: 1, name: "Mísseis Mágicos", time: "Ação", tags: "V, S", notes: "Dano: 1d4+1 por dardo." },
    { level: 1, name: "Raio de Bruxa", time: "Ação", tags: "V, S, M, Concentração", notes: "Dano: 2d12." },
    { level: 1, name: "Onda Trovejante", time: "Ação", tags: "V, S", notes: "Explosão de força trovejante ao redor do conjurador." },
    { level: 1, name: "Heroísmo", time: "Ação", tags: "V, S, Concentração", notes: "Fortalece a coragem de um alvo." },
    { level: 1, name: "Curar Ferimentos", time: "Ação", tags: "V, S", notes: "Cura: 2d8+3." },
    { level: 1, name: "Escudo Arcano", time: "Reação", tags: "V, S", notes: "Proteção reativa contra ataques." },
    { level: 2, name: "Passo Nebuloso", time: "Ação bônus", tags: "V", notes: "Teleporte curto." },
    { level: 2, name: "Aumentar/Reduzir", time: "Ação", tags: "V, S, M, Concentração", notes: "Altera o tamanho de uma criatura ou objeto." },
    { level: 2, name: "Sugestão", time: "Ação", tags: "V, M, Concentração", notes: "Influencia uma criatura por meio de uma sugestão mágica." },
    { level: 2, name: "Auxílio", time: "Ação", tags: "V, S, M", notes: "Fortalece aliados." },
  ],
  proficiencies: {
    weapons: "Armas simples.",
    armor: "Sem treinamento com armadura registrado.",
    tools: "Calígrafo.",
  },
  speciesTraits: "Resistência a Toxinas. Visão no Escuro. Conhecimento de Pedras.",
  classFeatures: "Pontos de Feitiçaria 3/3. Magia Acelerada. Magia Agravada. Surto de Magia Selvagem.",
  equipment: "Botas que não fazem barulho. 1 pergaminho de Paralisar Pessoa. Disco multicolorido. 1 Poção de Cura (2d4+2 PV). Machado +1.",
  coins: { cp: 0, sp: 0, ep: 0, gp: 217, pp: 0 },
  appearance: "Anão feiticeiro idoso, resistente, marcado por anos de estrada e túneis. Usa capa escura com inscrições rúnicas douradas e carrega ferramentas e objetos arcanos como quem nunca abandonou totalmente o sonho de minerar.",
  personality: "Teimoso, cansado e dividido entre o chamado divino e o desejo simples de ser aceito como minerador. Por fora, pode parecer alguém fugindo do próprio destino. Por dentro, ainda existe uma chama esperando motivo para voltar a arder.",
  languages: "Anão.",
  attunement: "",
  rollLog: [],
};

const wildSurgeEffects = [
  "Pedrinhas próximas começam a orbitar John por 1 minuto, como pequenos satélites minerais.",
  "A barba de John brilha com runas douradas até o fim da cena.",
  "Um cheiro forte de terra molhada e mina antiga toma o ambiente por alguns segundos.",
  "A próxima fala de John ecoa como se viesse de uma caverna profunda.",
  "Uma moeda de ouro ilusória aparece na mão de John e desaparece quando alguém tenta pegá-la.",
  "Por uma rodada, faíscas roxas escapam das mãos dele sempre que gesticula.",
  "John ouve, por um instante, uma picareta batendo em pedra em algum lugar impossível.",
  "Cristais minúsculos crescem no chão em volta dele e quebram logo depois.",
  "A próxima magia de John deixa um rastro visual de poeira dourada e fragmentos de rocha.",
  "Uma voz divina distante diz apenas: 'Ainda não terminou'. Ninguém sabe se foi real.",
  "A mana se comprime: John recupera 1 ponto de feitiçaria, sem ultrapassar o máximo.",
  "A mana escapa: John perde 1 ponto de feitiçaria, se tiver algum.",
  "A próxima rolagem de perícia de Arcanismo, História ou Natureza recebe +1.",
  "A próxima rolagem de ataque mágico de John recebe -1, pois a energia sai torta.",
  "Uma pequena ilusão de uma mina aparece atrás de John por alguns segundos.",
  "O chão treme de leve em volta dele, sem causar dano, mas denunciando sua presença.",
  "Uma pedra comum próxima se torna morna e emite luz fraca por 1 minuto.",
  "A magia tenta obedecer aos deuses: John tem vantagem no próximo teste ligado a ajudar outra pessoa.",
  "A magia rejeita a fuga do destino: John tem desvantagem no próximo teste para abandonar alguém em perigo.",
  "Surto forte: role novamente duas vezes e o mestre escolhe qual efeito entra em cena.",
];

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

function spellDC() {
  return 8 + (Number(sheet.profBonus) || 0) + spellMod();
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
    card.innerHTML = `
      <h3>Nível ${level}<span>${Math.max(max - used, 0)}/${max}</span></h3>
      <div class="slot-pips">${Array.from({ length: max }, (_, index) => `<span class="slot-pip ${index < used ? "used" : ""}"></span>`).join("")}</div>
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
      const bonus = String(sheet.attacks[index].bonus).trim().toLowerCase() === "magia" ? spellAttack() : parseSignedNumber(sheet.attacks[index].bonus);
      rollAndLog(`Ataque: ${sheet.attacks[index].name}`, `1d20${fmt(bonus)}`);
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
  list.innerHTML = "";

  sheet.spells
    .filter((spell) => currentSpellFilter === "all" || String(spell.level) === currentSpellFilter)
    .filter((spell) => !search || `${spell.name} ${spell.time} ${spell.tags} ${spell.notes}`.toLowerCase().includes(search))
    .forEach((spell, index) => {
      const realIndex = sheet.spells.indexOf(spell);
      const card = document.createElement("article");
      card.className = "spell-card";
      card.innerHTML = `
        <div class="spell-level">${spell.level === 0 ? "T" : spell.level}</div>
        <div>
          <h3 contenteditable="true" class="spell-name">${escapeHtml(spell.name)}</h3>
          <div class="spell-meta">
            <span>Nível <strong class="spell-level-text" contenteditable="true">${spell.level}</strong></span>
            <span>Tempo: <strong class="spell-time" contenteditable="true">${escapeHtml(spell.time)}</strong></span>
            <span class="spell-tags" contenteditable="true">${escapeHtml(spell.tags)}</span>
          </div>
          <p class="spell-notes" contenteditable="true">${escapeHtml(spell.notes)}</p>
        </div>
        <div class="spell-actions">
          <button class="mini cast-spell">Usar</button>
          <button class="mini roll-spell-damage">Dano/Cura</button>
          <button class="mini ghost remove-spell">×</button>
        </div>
      `;

      const syncSpell = () => {
        sheet.spells[realIndex] = {
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
    addLog(`Magia: ${spell.name}`, `Não existe controle de espaços para nível ${spell.level}.`);
    return;
  }
  if ((Number(slot.used) || 0) >= (Number(slot.max) || 0)) {
    addLog(`Magia: ${spell.name}`, `Sem espaços disponíveis de nível ${spell.level}.`);
    return;
  }
  slot.used += 1;
  saveSheet();
  renderSpellSlots();
  addLog(`Magia: ${spell.name}`, `Consumiu 1 espaço de nível ${spell.level}. Restam ${slot.max - slot.used}/${slot.max}.`);
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

function spendSorcery(cost) {
  if (sheet.sorcery.current < cost) {
    addLog("Pontos de Feitiçaria", `John não tem pontos suficientes. Custo: ${cost}.`);
    return;
  }
  sheet.sorcery.current -= cost;
  saveSheet();
  refreshAll();
  addLog("Pontos de Feitiçaria", `Gastou ${cost}. Restam ${sheet.sorcery.current}/${sheet.sorcery.max}.`);
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
  a.download = "john-stoneheart-ficha.json";
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

function setupActions() {
  document.body.addEventListener("click", (event) => {
    const action = event.target?.dataset?.action;
    const roll = event.target?.dataset?.roll;
    if (!action && !roll) return;

    if (action === "quick-save") saveSheet(true);
    if (action === "export-json") exportJson();
    if (action === "reset-sheet") {
      if (window.confirm("Resetar a ficha para o padrão inicial de John?")) {
        sheet = clone(defaultSheet);
        saveSheet();
        refreshAll();
      }
    }
    if (action === "damage") applyDamage();
    if (action === "heal") applyHeal();
    if (action === "full-heal") {
      sheet.hp.current = sheet.hp.max;
      sheet.hp.temp = 0;
      sheet.sorcery.current = sheet.sorcery.max;
      for (const slot of Object.values(sheet.spellSlots)) slot.used = 0;
      saveSheet();
      refreshAll();
      addLog("Descanso", "PV, pontos de feitiçaria e espaços de magia restaurados.");
    }
    if (action === "spend-sp") spendSorcery(Number(event.target.dataset.cost));
    if (action === "add-attack") {
      sheet.attacks.push({ name: "Novo ataque", bonus: "magia", damage: "1d6", notes: "" });
      saveSheet();
      renderAttacks();
    }
    if (action === "add-spell") {
      sheet.spells.push({ level: 1, name: "Nova magia", time: "Ação", tags: "", notes: "" });
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
    if (action === "wild-surge-check") {
      const result = rollDiceExpression("1d20");
      let outcome = "A magia treme, mas não rompe totalmente.";
      if (result.total === 1) outcome = "Surto forte. Role efeito selvagem agora.";
      else if (result.total <= 5) outcome = "Instabilidade leve. O mestre pode inserir um sinal mágico pequeno.";
      else if (result.total === 20) outcome = "A magia se alinha por um instante. John recupera 1 ponto de feitiçaria, se não estiver no máximo.";
      if (result.total === 20) sheet.sorcery.current = Math.min(sheet.sorcery.max, sheet.sorcery.current + 1);
      saveSheet(false);
      refreshAll();
      addLog("Teste de Magia Selvagem", `<strong>${result.total}</strong>. ${outcome}`);
    }
    if (action === "wild-surge-table") {
      const index = randomInt(1, wildSurgeEffects.length) - 1;
      const effect = wildSurgeEffects[index];
      if (index === 10) sheet.sorcery.current = Math.min(sheet.sorcery.max, sheet.sorcery.current + 1);
      if (index === 11) sheet.sorcery.current = Math.max(0, sheet.sorcery.current - 1);
      saveSheet(false);
      refreshAll();
      addLog("Efeito de Magia Selvagem", `<strong>${index + 1}</strong>. ${escapeHtml(effect)}`);
    }

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

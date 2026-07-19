const statDefinitions = [
  { key: "vitality", label: "VITALITY", icon: "♥" },
  { key: "purpose", label: "PURPOSE", icon: "✦" },
  { key: "wisdom", label: "WISDOM", icon: "◌" },
  { key: "bonds", label: "BONDS", icon: "∞" },
];

const chapters = [
  {
    age: 18,
    stage: "BECOMING",
    title: "The world is waiting.",
    type: "LIFE EVENT",
    copy: "School is over. Everyone asks what comes next, as if a life is a straight road and not a field of doors. Three of them stand open.",
    quote: "You do not need to see the whole path to take the first step.",
    caption: "A DOOR OPENS",
    symbol: "↗",
    color: "#f0643a",
    choices: [
      {
        title: "Study what fascinates you",
        copy: "Trade money and time for a deeper map of the world.",
        cost: -35,
        effects: { wisdom: 19, purpose: 8, vitality: -5 },
        tags: { scholar: 2 },
        memory: "You followed your curiosity into rooms full of questions.",
      },
      {
        title: "Learn a useful craft",
        copy: "Build a life with your hands and learn by doing.",
        cost: -10,
        effects: { wisdom: 10, vitality: 6, purpose: 9 },
        tags: { builder: 2 },
        memory: "You learned the satisfaction of making something real.",
      },
      {
        title: "Start earning now",
        copy: "Step into the working world and find your own footing.",
        cost: 35,
        effects: { vitality: -4, wisdom: 5, purpose: 5 },
        tags: { achiever: 2 },
        memory: "You chose independence and met the world head-on.",
      },
    ],
  },
  {
    age: 24,
    stage: "MOTION",
    title: "A chance with no guarantees.",
    type: "CROSSROADS",
    copy: "An ordinary Tuesday brings an extraordinary possibility. It will not wait forever—and it will ask you to leave something comfortable behind.",
    quote: "Security and possibility rarely knock at the same door.",
    caption: "THE GREAT MAYBE",
    symbol: "?",
    color: "#f3c64d",
    choices: [
      {
        title: "Take the steady road",
        copy: "Build a foundation that can carry future dreams.",
        cost: 45,
        effects: { vitality: 5, purpose: 3, wisdom: 5 },
        tags: { achiever: 2, builder: 1 },
        memory: "You found dignity in steadiness and room to breathe.",
      },
      {
        title: "Bet on your strange idea",
        copy: "Risk what you have for the thing you cannot stop imagining.",
        cost: -45,
        effects: { purpose: 20, vitality: -9, wisdom: 9 },
        tags: { explorer: 2, achiever: 1 },
        memory: "You chose the electric uncertainty of your own idea.",
      },
      {
        title: "Go somewhere unknown",
        copy: "Pack lightly. Let unfamiliar places rearrange you.",
        cost: -25,
        effects: { purpose: 12, wisdom: 14, bonds: 4 },
        tags: { explorer: 3 },
        memory: "You left the map and discovered a larger world.",
      },
    ],
  },
  {
    age: 31,
    stage: "BELONGING",
    title: "Who gets your time?",
    type: "HUMAN QUESTION",
    copy: "Days have begun to move faster. Work wants more. So do the people you love. A quiet voice asks what all this effort is meant to hold.",
    quote: "Attention is the rarest currency you will ever spend.",
    caption: "A PLACE TO BELONG",
    symbol: "∞",
    color: "#b7686d",
    choices: [
      {
        title: "Build a home with someone",
        copy: "Choose the daily practice of sharing a life.",
        cost: -25,
        effects: { bonds: 23, purpose: 9, vitality: 4 },
        tags: { connector: 3, builder: 1 },
        memory: "You made a home from small promises kept often.",
      },
      {
        title: "Protect your independence",
        copy: "Keep space for the person you are still becoming.",
        cost: 15,
        effects: { wisdom: 11, purpose: 10, bonds: -5 },
        tags: { explorer: 2, scholar: 1 },
        memory: "You kept a room in your life that belonged only to you.",
      },
      {
        title: "Gather a chosen family",
        copy: "Invest in a circle where everyone has a seat.",
        cost: -15,
        effects: { bonds: 19, vitality: 7, purpose: 7 },
        tags: { connector: 3 },
        memory: "You built a table where people knew they were welcome.",
      },
    ],
  },
  {
    age: 39,
    stage: "THE STORM",
    title: "The plan breaks open.",
    type: "CHALLENGE",
    copy: "A hard year arrives without invitation. The work changes. Your body asks to be heard. Someone needs you. There is no way through unchanged.",
    quote: "Courage is sometimes no more glamorous than staying present.",
    caption: "WEATHERING IT",
    symbol: "≈",
    color: "#3f6f91",
    choices: [
      {
        title: "Spend your safety net",
        copy: "Buy yourself the time and care needed to recover.",
        cost: -50,
        effects: { vitality: 20, wisdom: 11, purpose: -2 },
        tags: { survivor: 2 },
        memory: "You learned that saving yourself was money well spent.",
      },
      {
        title: "Let people carry you",
        copy: "Say the difficult words: I cannot do this alone.",
        cost: 0,
        effects: { bonds: 20, wisdom: 13, vitality: 5 },
        tags: { connector: 2, survivor: 2 },
        memory: "You asked for help and found hands already reaching.",
      },
      {
        title: "Push straight through",
        copy: "Keep moving until the storm is behind you.",
        cost: 30,
        effects: { purpose: 10, vitality: -17, wisdom: 6 },
        tags: { achiever: 2, survivor: 1 },
        memory: "You endured—but strength left a mark on you.",
      },
    ],
  },
  {
    age: 52,
    stage: "MEANING",
    title: "Enough becomes a question.",
    type: "TURNING POINT",
    copy: "You have built something: a career, a reputation, a way of being. Now life asks whether to climb higher, reach backward, or finally look around.",
    quote: "A successful life and a meaningful life sometimes overlap.",
    caption: "WHAT REMAINS",
    symbol: "◇",
    color: "#69866f",
    choices: [
      {
        title: "Teach what you know",
        copy: "Open doors for people still searching for theirs.",
        cost: -10,
        effects: { bonds: 16, wisdom: 14, purpose: 13 },
        tags: { mentor: 3, scholar: 1 },
        memory: "Your hard-won lessons became lanterns for others.",
      },
      {
        title: "Build something lasting",
        copy: "Gather your ambition for one defining work.",
        cost: 60,
        effects: { purpose: 18, wisdom: 5, vitality: -10 },
        tags: { achiever: 3, builder: 2 },
        memory: "You gave your name to something made to outlive you.",
      },
      {
        title: "Choose a smaller life",
        copy: "Exchange more for enough, and hurry for presence.",
        cost: -15,
        effects: { vitality: 19, bonds: 12, purpose: 8 },
        tags: { gardener: 3 },
        memory: "You discovered how spacious a smaller life could feel.",
      },
    ],
  },
  {
    age: 68,
    stage: "LEGACY",
    title: "The view from here.",
    type: "FINAL CHAPTER",
    copy: "The years behind you no longer look like a list of achievements. They look like faces, chances taken, ordinary mornings, and the person your choices made.",
    quote: "In the end, a life is not counted. It is felt.",
    caption: "ONE MORE MORNING",
    symbol: "☼",
    color: "#e4a74c",
    choices: [
      {
        title: "Write down the story",
        copy: "Make meaning of the winding road and pass it on.",
        cost: 0,
        effects: { wisdom: 18, purpose: 12, bonds: 5 },
        tags: { scholar: 2, mentor: 2 },
        memory: "You left behind a story honest enough to be useful.",
      },
      {
        title: "Give away what you can",
        copy: "Turn what remains into possibility for someone else.",
        cost: -60,
        effects: { bonds: 18, purpose: 17, vitality: 3 },
        tags: { connector: 2, mentor: 2 },
        memory: "Your good fortune became someone else's first chance.",
      },
      {
        title: "Take one last adventure",
        copy: "Meet the horizon with the same wonder as before.",
        cost: -35,
        effects: { vitality: 10, purpose: 20, wisdom: 7 },
        tags: { explorer: 3 },
        memory: "You stayed curious all the way to the horizon.",
      },
    ],
  },
];

const endings = [
  {
    id: "beacon",
    title: "The Human Beacon",
    symbol: "✦",
    test: (s) => s.bonds >= 75 && s.purpose >= 68,
    copy: "People remember how the room changed when you entered it. You made others feel seen, then showed them how to see one another.",
    quote: "A life shared became a light multiplied.",
  },
  {
    id: "architect",
    title: "The Lasting Architect",
    symbol: "▱",
    test: (s) => s.dollars >= 150 || (s.tags.builder >= 4 && s.purpose >= 72),
    copy: "You turned patience and effort into things that endured. What you built kept sheltering people long after you stepped away.",
    quote: "You measured wealth by what could keep giving.",
  },
  {
    id: "wild",
    title: "The Wild Compass",
    symbol: "↗",
    test: (s) => s.tags.explorer >= 5 && s.purpose >= 65,
    copy: "You never confused the familiar with the necessary. Your life crossed borders, literal and otherwise, and came home larger each time.",
    quote: "Wonder was the direction you trusted most.",
  },
  {
    id: "sage",
    title: "The Open Book",
    symbol: "◌",
    test: (s) => s.wisdom >= 82 || s.tags.scholar + s.tags.mentor >= 7,
    copy: "You kept learning, especially when certainty would have been easier. In time, people sought you not for answers, but for better questions.",
    quote: "Every chapter taught you how much remained unread.",
  },
  {
    id: "garden",
    title: "The Quiet Garden",
    symbol: "❋",
    test: (s) => s.vitality >= 70 && s.bonds >= 60,
    copy: "Your life did not need to be loud to be full. You tended to your days and your people, and both grew toward the light.",
    quote: "Enough was not a compromise. It was an art.",
  },
  {
    id: "phoenix",
    title: "The Weathered Gold",
    symbol: "≈",
    test: (s) => s.tags.survivor >= 3 || s.vitality < 45,
    copy: "Life asked more of you than seemed fair. Still, you made something tender from the wreckage and refused to let hardship have the final word.",
    quote: "You were not unbroken. You were beautifully remade.",
  },
  {
    id: "mosaic",
    title: "The Beautiful Mosaic",
    symbol: "◆",
    test: () => true,
    copy: "No single pursuit defined you. Your life became a collection of loyalties, detours, brave attempts, and changes of heart—and somehow, it all belonged.",
    quote: "The pattern only appeared when you looked back.",
  },
];

const freshState = () => ({
  name: "Rowan",
  started: false,
  chapter: 0,
  ended: false,
  dollars: 80,
  vitality: 52,
  purpose: 48,
  wisdom: 42,
  bonds: 50,
  tags: {
    scholar: 0,
    builder: 0,
    achiever: 0,
    explorer: 0,
    connector: 0,
    survivor: 0,
    mentor: 0,
    gardener: 0,
  },
  memories: [],
});

let state = freshState();
let soundEnabled = true;

const elements = {
  age: document.querySelector("#age-value"),
  ageRing: document.querySelector("#age-ring"),
  begin: document.querySelector("#begin-button"),
  chapterLabel: document.querySelector("#chapter-label"),
  chapterProgress: document.querySelector("#chapter-progress"),
  choices: document.querySelector("#choices"),
  dollarCount: document.querySelector("#dollar-count"),
  copyEnding: document.querySelector("#copy-ending"),
  endingCopy: document.querySelector("#ending-copy"),
  endingModal: document.querySelector("#ending-modal"),
  endingQuote: document.querySelector("#ending-quote"),
  endingStats: document.querySelector("#ending-stats"),
  endingSymbol: document.querySelector("#ending-symbol"),
  endingTitle: document.querySelector("#ending-title"),
  eventCard: document.querySelector("#event-card"),
  eventCopy: document.querySelector("#event-copy"),
  eventQuote: document.querySelector("#event-quote"),
  eventTitle: document.querySelector("#event-title"),
  eventType: document.querySelector("#event-type"),
  eventVisual: document.querySelector("#event-visual"),
  headerChapter: document.querySelector("#header-chapter"),
  introModal: document.querySelector("#intro-modal"),
  nameInput: document.querySelector("#name-input"),
  pathCount: document.querySelector("#path-count"),
  pathMarkers: document.querySelector("#path-markers"),
  pathSummary: document.querySelector("#path-summary"),
  playAgain: document.querySelector("#play-again"),
  playerName: document.querySelector("#player-name"),
  playerTitle: document.querySelector("#player-title"),
  restart: document.querySelector("#restart-button"),
  sound: document.querySelector("#sound-toggle"),
  stageLabel: document.querySelector("#stage-label"),
  stats: document.querySelector("#stats"),
  toast: document.querySelector("#toast"),
  visualCaption: document.querySelector("#visual-caption"),
  visualNumber: document.querySelector("#visual-number"),
  visualSymbol: document.querySelector("#visual-symbol"),
};

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function buildStaticUI() {
  elements.stats.innerHTML = statDefinitions
    .map(
      ({ key, label, icon }) => `
        <div class="stat" data-stat="${key}">
          <div class="stat__top">
            <span class="stat__name"><i class="stat__icon">${icon}</i>${label}</span>
            <span class="stat__value">0</span>
          </div>
          <div class="stat__track"><div class="stat__fill"></div></div>
        </div>`,
    )
    .join("");

  elements.pathMarkers.innerHTML = chapters
    .map((_, index) => `<i class="path-marker" data-marker="${index}"></i>`)
    .join("");
}

function render() {
  const chapter = chapters[state.chapter];
  const number = String(state.chapter + 1).padStart(2, "0");

  elements.age.textContent = chapter.age;
  elements.ageRing.style.strokeDashoffset = 333 - 333 * (chapter.age / 90);
  elements.chapterLabel.textContent = `CHAPTER ${number} / ${String(chapters.length).padStart(2, "0")}`;
  elements.chapterProgress.style.width = `${((state.chapter + 1) / chapters.length) * 100}%`;
  elements.dollarCount.textContent = state.dollars;
  elements.eventCopy.textContent = chapter.copy;
  elements.eventQuote.textContent = `“${chapter.quote}”`;
  elements.eventTitle.textContent = chapter.title;
  elements.eventType.textContent = chapter.type;
  elements.eventVisual.style.setProperty("--visual-color", chapter.color);
  elements.headerChapter.textContent = chapter.title;
  elements.playerName.textContent = state.name;
  elements.stageLabel.textContent = chapter.stage;
  elements.visualCaption.textContent = chapter.caption;
  elements.visualNumber.textContent = number;
  elements.visualSymbol.textContent = chapter.symbol;

  statDefinitions.forEach(({ key }) => {
    const stat = document.querySelector(`[data-stat="${key}"]`);
    stat.querySelector(".stat__value").textContent = state[key];
    stat.querySelector(".stat__fill").style.width = `${state[key]}%`;
  });

  document.querySelectorAll(".path-marker").forEach((marker, index) => {
    marker.classList.toggle("is-lived", index < state.chapter);
  });

  elements.pathCount.textContent = `${state.memories.length} ${state.memories.length === 1 ? "choice" : "choices"}`;
  elements.pathSummary.textContent = state.memories.at(-1) || "Your story has yet to be written.";
  elements.playerTitle.textContent = getPlayerTitle();

  elements.choices.innerHTML = chapter.choices.map(renderChoice).join("");
  elements.choices.querySelectorAll(".choice").forEach((button, index) => {
    button.addEventListener("click", () => choose(index));
  });

  saveProgress();
}

function renderChoice(choice, index) {
  const unavailable = state.dollars + choice.cost < 0;
  const amount = choice.cost === 0 ? "FREE" : `${choice.cost > 0 ? "+" : "−"}${Math.abs(choice.cost)}`;
  return `
    <button class="choice" type="button" data-choice="${index}" ${unavailable ? "disabled" : ""}>
      <div class="choice__meta">
        <span class="choice__number">OPTION ${String(index + 1).padStart(2, "0")}</span>
        <span class="choice__cost"><i class="dollar">$</i>${unavailable ? "NEED " : ""}${amount}</span>
      </div>
      <h4>${choice.title}</h4>
      <p>${unavailable ? "You do not have enough dollars for this path." : choice.copy}</p>
    </button>`;
}

function choose(index) {
  if (state.ended) return;
  const choice = chapters[state.chapter].choices[index];
  if (!choice || state.dollars + choice.cost < 0) return;

  elements.choices.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
  playTone(choice.cost >= 0 ? 420 : 310);

  state.dollars += choice.cost;
  Object.entries(choice.effects).forEach(([key, value]) => {
    state[key] = clamp(state[key] + value);
  });
  Object.entries(choice.tags).forEach(([key, value]) => {
    state.tags[key] += value;
  });
  state.memories.push(choice.memory);

  if (state.chapter === chapters.length - 1) {
    state.ended = true;
    saveProgress();
    window.setTimeout(showEnding, 450);
    return;
  }

  elements.eventCard.classList.add("is-changing");
  elements.choices.classList.add("is-changing");
  window.setTimeout(() => {
    state.chapter += 1;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    elements.eventCard.classList.remove("is-changing");
    elements.choices.classList.remove("is-changing");
  }, 220);
}

function getPlayerTitle() {
  if (!state.memories.length) return "A blank page";
  const sorted = Object.entries(state.tags).sort((a, b) => b[1] - a[1]);
  const titles = {
    scholar: "A curious mind",
    builder: "A maker of things",
    achiever: "A determined spirit",
    explorer: "A restless compass",
    connector: "A keeper of people",
    survivor: "A weathered soul",
    mentor: "A generous guide",
    gardener: "A tender of days",
  };
  return titles[sorted[0][0]];
}

function showEnding() {
  const ending = endings.find((candidate) => candidate.test(state));
  elements.endingTitle.textContent = ending.title;
  elements.endingSymbol.textContent = ending.symbol;
  elements.endingCopy.textContent = ending.copy;
  elements.endingQuote.textContent = `“${ending.quote}”`;
  elements.endingStats.innerHTML = statDefinitions
    .map(
      ({ key, label }) => `
        <div class="ending-stat">
          <strong>${state[key]}</strong>
          <span>${label}</span>
        </div>`,
    )
    .join("");
  elements.endingModal.hidden = false;
  elements.endingModal.dataset.ending = ending.id;
  playTone(520);
}

function startLife() {
  const name = elements.nameInput.value.trim();
  state = freshState();
  state.name = name || "Rowan";
  state.started = true;
  elements.introModal.hidden = true;
  elements.endingModal.hidden = true;
  render();
  playTone(380);
}

function restartLife() {
  localStorage.removeItem("life-rpg-progress");
  state = freshState();
  elements.nameInput.value = state.name;
  elements.endingModal.hidden = true;
  elements.introModal.hidden = false;
  elements.nameInput.focus();
}

function saveProgress() {
  if (!state.started) return;
  try {
    localStorage.setItem("life-rpg-progress", JSON.stringify(state));
  } catch {
    // The game still works when storage is unavailable.
  }
}

function restoreProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("life-rpg-progress"));
    if (!saved?.started || !Number.isInteger(saved.chapter) || saved.chapter >= chapters.length) return false;
    const restoredDollars = saved.dollars ?? saved.coins ?? freshState().dollars;
    state = {
      ...freshState(),
      ...saved,
      dollars: restoredDollars,
      tags: { ...freshState().tags, ...saved.tags },
    };
    elements.nameInput.value = state.name;
    elements.introModal.hidden = true;
    return true;
  } catch {
    return false;
  }
}

function playTone(frequency) {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    gain.gain.setValueAtTime(0.035, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.16);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.16);
  } catch {
    // Audio is a small enhancement, never a requirement.
  }
}

async function copyEnding() {
  const text = `${state.name}'s LIFE/ ending: ${elements.endingTitle.textContent} — ${elements.endingQuote.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    elements.toast.textContent = "Ending copied";
  } catch {
    elements.toast.textContent = "Could not access clipboard";
  }
  elements.toast.classList.add("is-visible");
  window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1800);
}

elements.begin.addEventListener("click", startLife);
elements.nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") startLife();
});
elements.restart.addEventListener("click", restartLife);
elements.playAgain.addEventListener("click", restartLife);
elements.copyEnding.addEventListener("click", copyEnding);
elements.sound.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  elements.sound.classList.toggle("is-muted", !soundEnabled);
  elements.sound.setAttribute("aria-label", soundEnabled ? "Mute sound" : "Enable sound");
  if (soundEnabled) playTone(440);
});

buildStaticUI();
restoreProgress();
render();
if (state.ended) window.setTimeout(showEnding, 0);

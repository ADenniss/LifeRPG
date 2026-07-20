const statDefinitions = [
  { key: "vitality", label: "VITALITY", icon: "♥" },
  { key: "purpose", label: "PURPOSE", icon: "✦" },
  { key: "wisdom", label: "WISDOM", icon: "◌" },
  { key: "bonds", label: "BONDS", icon: "∞" },
];

const GAME_VERSION = 6;

const relationshipDefinitions = [
  { id: "family", name: "Robin", role: "FAMILY", unlockAge: 0, startingBond: 45, color: "#f3c64d" },
  { id: "friend", name: "Alex", role: "FRIEND", unlockAge: 6, startingBond: 25, color: "#3f6f91" },
  { id: "partner", name: "Jules", role: "PARTNER · CHOSEN FAMILY", unlockAge: 24, startingBond: 20, color: "#b7686d" },
  { id: "younger", name: "Sam", role: "YOUNGER FAMILY", unlockAge: 52, startingBond: 20, color: "#69866f" },
];

const shopItems = [
  { id: "sketchbook", name: "A good sketchbook", icon: "▤", minAge: 6, price: 10, color: "#e4a74c", copy: "A private place for unfinished thoughts.", effects: { wisdom: 4, purpose: 3 } },
  { id: "bicycle", name: "A sturdy bicycle", icon: "○", minAge: 13, price: 20, color: "#f0643a", copy: "Freedom with two wheels and a bell.", effects: { vitality: 6, purpose: 2 } },
  { id: "instrument", name: "A used instrument", icon: "♪", minAge: 18, price: 25, color: "#b7686d", copy: "Something to play badly until you play it well.", effects: { purpose: 8, bonds: 2 } },
  { id: "laptop", name: "A capable laptop", icon: "□", minAge: 18, price: 35, color: "#8ca4b2", copy: "A tool for learning, working, and making ideas real.", effects: { wisdom: 7, purpose: 5 } },
  { id: "pet", name: "Adopt a companion", icon: "♥", minAge: 24, price: 30, color: "#d98964", copy: "A small life that makes every home warmer.", effects: { vitality: 4, bonds: 7 }, relationshipEffects: { family: 4, partner: 5 } },
  { id: "car", name: "A reliable car", icon: "→", minAge: 24, price: 45, color: "#7d8d91", copy: "Less glamorous than useful—and useful every day.", effects: { vitality: 5, purpose: 3 } },
  { id: "camera", name: "A small camera", icon: "◉", minAge: 28, price: 30, color: "#f3c64d", copy: "A reason to notice what the days are made of.", effects: { wisdom: 6, purpose: 5 } },
  { id: "home", name: "A home deposit", icon: "⌂", minAge: 31, price: 80, color: "#69866f", copy: "A stake in the ground and a key of your own.", effects: { vitality: 8, bonds: 8 }, relationshipEffects: { family: 5, partner: 8 } },
  { id: "tools", name: "Workshop tools", icon: "×", minAge: 39, price: 40, color: "#c48b54", copy: "The pleasure of repairing and building things yourself.", effects: { purpose: 8, wisdom: 4 } },
  { id: "journey", name: "A faraway ticket", icon: "↗", minAge: 45, price: 50, color: "#3f6f91", copy: "A place you have only seen on maps.", effects: { wisdom: 7, purpose: 8 }, relationshipEffects: { partner: 5, friend: 3 } },
  { id: "garden", name: "A garden plot", icon: "✣", minAge: 52, price: 30, color: "#7f9879", copy: "A little earth that rewards patient attention.", effects: { vitality: 8, purpose: 5 } },
  { id: "holiday", name: "A family holiday", icon: "☼", minAge: 58, price: 55, color: "#e4a74c", copy: "Shared days that will become shared stories.", effects: { bonds: 10, vitality: 3 }, relationshipEffects: { family: 8, friend: 5, partner: 8, younger: 8 } },
  { id: "chair", name: "The perfect chair", icon: "⌑", minAge: 64, price: 20, color: "#8b8067", copy: "Comfort is allowed to become a serious priority.", effects: { vitality: 5, wisdom: 2 } },
  { id: "album", name: "A memory album", icon: "◇", minAge: 74, price: 15, color: "#a87571", copy: "Proof that ordinary days were never ordinary.", effects: { bonds: 6, wisdom: 4 }, relationshipEffects: { family: 6, friend: 6, partner: 6, younger: 6 } },
];

const choiceBondEffects = {
  "Reach toward the light": { family: 2 },
  "Hold the waiting hand": { family: 8 },
  "Cry with all your might": { family: 3 },
  "Ask one hundred questions": { family: 2 },
  "Make room for a shy kid": { friend: 10 },
  "Build a secret hideout": { friend: 3 },
  "Stand beside them": { friend: 8 },
  "Find a grown-up": { family: 3, friend: 3 },
  "Check on them afterward": { friend: 7 },
  "Join the team": { friend: 8 },
  "Disappear into books": { friend: -3 },
  "Start a tiny business": { family: 2 },
  "Study what fascinates you": { family: 2, friend: -1 },
  "Learn a useful craft": { family: 3 },
  "Start earning now": { family: 3 },
  "Try again differently": { friend: 2 },
  "Ask a mentor for honesty": { family: 2 },
  "Choose a new direction": { friend: 3 },
  "Take the steady road": { family: 4, partner: 3 },
  "Bet on your strange idea": { family: -2, partner: 2 },
  "Go somewhere unknown": { friend: 5, partner: 2 },
  "Organize the neighbors": { friend: 6, partner: 3 },
  "Offer your useful skills": { friend: 4 },
  "Focus on your own future": { friend: -2, partner: -2 },
  "Build a home with someone": { family: 4, partner: 15 },
  "Protect your independence": { friend: 3, partner: -7 },
  "Gather a chosen family": { friend: 10, partner: 7 },
  "Spend your safety net": { family: 4, friend: 2, partner: 4 },
  "Let people carry you": { family: 8, friend: 8, partner: 8 },
  "Push straight through": { family: -4, friend: -4, partner: -4 },
  "Begin the second career": { friend: 4, partner: -3 },
  "Protect what you built": { family: 3, partner: 6 },
  "Make a smaller space for it": { partner: 3 },
  "Teach what you know": { friend: 3, younger: 10 },
  "Build something lasting": { younger: 4 },
  "Choose a smaller life": { family: 4, friend: 4, partner: 4, younger: 4 },
  "Step back from work": { family: 12, partner: 3 },
  "Pay for excellent help": { family: 8, partner: 3 },
  "Bring the family together": { family: 7, friend: 7, partner: 7, younger: 7 },
  "Open the little shop": { friend: 3, partner: 3 },
  "Care for someone you love": { family: 12 },
  "Consult on your own terms": { younger: 6 },
  "Write down the story": { younger: 8 },
  "Give away what you can": { family: 6, friend: 6, partner: 6, younger: 6 },
  "Take one last adventure": { friend: 4, partner: 4 },
  "Adapt the old home": { partner: 3, younger: 3 },
  "Move closer to your people": { family: 7, friend: 7, partner: 7, younger: 7 },
  "Accept help with grace": { family: 5, friend: 5, partner: 5, younger: 5 },
  "Gather everyone close": { family: 10, friend: 10, partner: 10, younger: 10 },
  "Make peace with unfinished things": { family: 4, friend: 4, partner: 4, younger: 4 },
  "Watch one more sunrise": { friend: 2, partner: 3 },
};

const chapters = [
  {
    age: 0,
    stage: "BEGINNING",
    title: "A life begins.",
    type: "BIRTH",
    copy: "Before plans, careers, or accomplishments, there is a first breath. Everything is new. Every stat begins at zero. From here, a whole human life will be built choice by choice.",
    quote: "Every person begins as pure possibility.",
    caption: "THE FIRST BREATH",
    symbol: "○",
    color: "#d98964",
    choices: [
      {
        title: "Reach toward the light",
        copy: "Meet the unfamiliar world with quiet curiosity.",
        cost: 0,
        effects: { wisdom: 3, purpose: 2, vitality: 1 },
        tags: { scholar: 1, explorer: 1 },
        memory: "From your first moments, your attention reached outward.",
      },
      {
        title: "Hold the waiting hand",
        copy: "Let your earliest certainty be another person's warmth.",
        cost: 0,
        effects: { bonds: 5, vitality: 2, purpose: 1 },
        tags: { connector: 1 },
        memory: "Your life began with the knowledge that you were not alone.",
      },
      {
        title: "Cry with all your might",
        copy: "Announce yourself with breath, force, and stubborn life.",
        cost: 0,
        effects: { vitality: 5, purpose: 1, wisdom: 1 },
        tags: { survivor: 1 },
        memory: "You arrived loudly, already determined to be here.",
      },
    ],
  },
  {
    age: 6,
    stage: "CHILDHOOD",
    title: "The world is still enormous.",
    type: "FIRST MEMORY",
    copy: "Your life begins in a world of scraped knees, long afternoons, and questions no grown-up answers properly. Even now, small choices are becoming you.",
    quote: "Before you knew what a path was, you were already making one.",
    caption: "THE FIRST SPARK",
    symbol: "✦",
    color: "#e4a74c",
    choices: [
      {
        title: "Ask one hundred questions",
        copy: "Follow every why until the adults run out of answers.",
        cost: 0,
        effects: { wisdom: 8, purpose: 4, vitality: 2 },
        tags: { scholar: 2 },
        memory: "You met the world with an endless supply of questions.",
      },
      {
        title: "Make room for a shy kid",
        copy: "Share the space beside you and make the first hello.",
        cost: 0,
        effects: { bonds: 10, purpose: 3, vitality: 3 },
        tags: { connector: 2 },
        memory: "Your first great gift was making someone feel included.",
      },
      {
        title: "Build a secret hideout",
        copy: "Turn blankets, branches, and imagination into a kingdom.",
        cost: 0,
        effects: { vitality: 7, wisdom: 4, purpose: 4 },
        tags: { builder: 2, explorer: 1 },
        memory: "You built a world of your own and appointed yourself its keeper.",
      },
    ],
  },
  {
    age: 9,
    stage: "CONSCIENCE",
    title: "Something is not fair.",
    type: "SMALL COURAGE",
    copy: "On the playground, a crowd has found someone smaller to laugh at. You could keep walking. You could also discover what kind of person you want to be.",
    quote: "Character first appears in moments no one planned for.",
    caption: "THE FIRST STAND",
    symbol: "!",
    color: "#c5735f",
    choices: [
      {
        title: "Stand beside them",
        copy: "Make it clear that the smaller kid is not standing alone.",
        cost: 0,
        effects: { bonds: 8, purpose: 6, vitality: -2 },
        tags: { connector: 2, survivor: 1 },
        memory: "You discovered that courage could be as simple as standing beside someone.",
      },
      {
        title: "Find a grown-up",
        copy: "Ask someone with more power to use it well.",
        cost: 0,
        effects: { wisdom: 7, bonds: 4, purpose: 3 },
        tags: { scholar: 1, connector: 1 },
        memory: "You learned that asking for help could also be an act of courage.",
      },
      {
        title: "Check on them afterward",
        copy: "Avoid the crowd, then offer quiet kindness when it has passed.",
        cost: 0,
        effects: { bonds: 6, wisdom: 5, vitality: 2 },
        tags: { connector: 2 },
        memory: "Your kindness arrived quietly, but it arrived when someone needed it.",
      },
    ],
  },
  {
    age: 13,
    stage: "DISCOVERY",
    title: "You begin choosing who to be.",
    type: "GROWING PAINS",
    copy: "The safe little world of childhood stretches and cracks. You notice how others see you—and discover that their version does not have to be yours.",
    quote: "Becoming yourself begins with trying on many selves.",
    caption: "FINDING A VOICE",
    symbol: "~",
    color: "#8ca4b2",
    choices: [
      {
        title: "Join the team",
        copy: "Work weekends to buy your gear, then learn how to show up together.",
        cost: 10,
        effects: { vitality: 9, bonds: 7, purpose: 3 },
        tags: { connector: 1, survivor: 1 },
        memory: "You learned that belonging could be practiced.",
      },
      {
        title: "Disappear into books",
        copy: "Help shelve books after school and find secret doors between two covers.",
        cost: 15,
        effects: { wisdom: 10, purpose: 5, bonds: -2 },
        tags: { scholar: 2, explorer: 1 },
        memory: "You lived a hundred borrowed lives before starting your own.",
      },
      {
        title: "Start a tiny business",
        copy: "Turn a small talent into your first earned dollars.",
        cost: 35,
        effects: { purpose: 7, wisdom: 5, vitality: -2 },
        tags: { achiever: 2, builder: 1 },
        memory: "Your first customer made possibility feel real.",
      },
    ],
  },
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
    age: 21,
    stage: "SETBACK",
    title: "The first plan falls apart.",
    type: "CHALLENGE",
    copy: "The rejection is brief and painfully polite. A door you had already imagined walking through closes. Failure feels personal before it feels useful.",
    quote: "A closed door can be an ending, a lesson, or a redirection.",
    caption: "TRYING AGAIN",
    symbol: "×",
    color: "#8d6b72",
    choices: [
      {
        title: "Try again differently",
        copy: "Study what failed, change the approach, and return.",
        cost: -10,
        effects: { wisdom: 9, purpose: 8, vitality: -3 },
        tags: { survivor: 2, achiever: 1 },
        memory: "You learned to let failure edit the plan without writing the ending.",
      },
      {
        title: "Ask a mentor for honesty",
        copy: "Invite the advice you may not want but probably need.",
        cost: 0,
        effects: { wisdom: 11, bonds: 5, purpose: 4 },
        tags: { scholar: 1, mentor: 1 },
        memory: "You found someone willing to tell you the useful truth.",
      },
      {
        title: "Choose a new direction",
        copy: "Stop forcing the locked door and notice the open window.",
        cost: 20,
        effects: { purpose: 7, vitality: 6, wisdom: 4 },
        tags: { explorer: 2 },
        memory: "You released one future and made room for another.",
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
    age: 28,
    stage: "COMMUNITY",
    title: "Your neighborhood needs something.",
    type: "CALL TO ACTION",
    copy: "The shared garden is closing. Everyone agrees that someone should do something, but the room becomes very quiet when someone asks who.",
    quote: "A community is built by whoever decides to begin.",
    caption: "SHOWING UP",
    symbol: "+",
    color: "#7f9879",
    choices: [
      {
        title: "Organize the neighbors",
        copy: "Make the calls, hold the meetings, and keep the gate open.",
        cost: -15,
        effects: { bonds: 12, purpose: 9, vitality: -4 },
        tags: { connector: 2, builder: 1 },
        memory: "You turned a group of nearby strangers into neighbors.",
      },
      {
        title: "Offer your useful skills",
        copy: "Contribute what you know without needing to lead.",
        cost: 0,
        effects: { bonds: 7, wisdom: 5, purpose: 6 },
        tags: { builder: 1, connector: 1 },
        memory: "You learned that contribution did not have to come with a title.",
      },
      {
        title: "Focus on your own future",
        copy: "Protect the time and money your plans currently need.",
        cost: 25,
        effects: { purpose: 6, vitality: 4, bonds: -5 },
        tags: { achiever: 2 },
        memory: "You kept your focus narrow so your own future could grow.",
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
    age: 45,
    stage: "MIDLIFE",
    title: "An unlived life comes calling.",
    type: "CROSSROADS",
    copy: "A possibility you buried years ago returns, inconvenient and bright. Following it would disrupt the life you built. Ignoring it would cost something too.",
    quote: "Not every dream expires when postponed.",
    caption: "THE SECOND DOOR",
    symbol: "Ⅱ",
    color: "#c48b54",
    choices: [
      {
        title: "Begin the second career",
        copy: "Accept being new, uncertain, and awake again.",
        cost: -40,
        effects: { purpose: 15, wisdom: 7, vitality: -5 },
        tags: { explorer: 2, achiever: 1 },
        memory: "You became a beginner at an age when certainty was expected.",
      },
      {
        title: "Protect what you built",
        copy: "Choose the commitments that already carry your name.",
        cost: 40,
        effects: { bonds: 7, purpose: 4, vitality: 3 },
        tags: { builder: 2, achiever: 1 },
        memory: "You chose depth over novelty and strengthened what was already yours.",
      },
      {
        title: "Make a smaller space for it",
        copy: "Give the dream evenings and weekends instead of everything.",
        cost: -15,
        effects: { purpose: 10, wisdom: 5, vitality: -2 },
        tags: { gardener: 1, explorer: 1 },
        memory: "You found that a dream could breathe without consuming the whole room.",
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
    age: 58,
    stage: "CARE",
    title: "Someone you love needs you.",
    type: "FAMILY CHALLENGE",
    copy: "The calls become more frequent. Appointments appear on your calendar. Love, once abstract and easy to declare, becomes a question of hours, money, and presence.",
    quote: "Care is love translated into ordinary verbs.",
    caption: "THE WORK OF LOVE",
    symbol: "⌂",
    color: "#a87571",
    choices: [
      {
        title: "Step back from work",
        copy: "Trade income and momentum for time beside them.",
        cost: -35,
        effects: { bonds: 15, wisdom: 7, vitality: -7 },
        tags: { connector: 2, survivor: 1 },
        memory: "You rearranged your life so someone you loved would not face theirs alone.",
      },
      {
        title: "Pay for excellent help",
        copy: "Use what you earned to bring skill and steadiness into the room.",
        cost: -55,
        effects: { bonds: 9, vitality: 8, wisdom: 5 },
        tags: { achiever: 1, connector: 1 },
        memory: "You turned money into care and made space to remain family.",
      },
      {
        title: "Bring the family together",
        copy: "Share the work honestly instead of carrying it silently.",
        cost: 0,
        effects: { bonds: 12, wisdom: 8, vitality: 2 },
        tags: { connector: 2, mentor: 1 },
        memory: "You made care a shared promise instead of a private burden.",
      },
    ],
  },
  {
    age: 64,
    stage: "REINVENTION",
    title: "The old map ends here.",
    type: "NEW SEASON",
    copy: "For years, your calendar told you who to be. Now an unfamiliar space opens. It could feel like an ending—or like time returned to its owner.",
    quote: "It is never too late to become a beginner again.",
    caption: "ANOTHER BEGINNING",
    symbol: "↻",
    color: "#8b8067",
    choices: [
      {
        title: "Open the little shop",
        copy: "Give an old daydream a front door and opening hours.",
        cost: -30,
        effects: { purpose: 14, wisdom: 6, vitality: 4 },
        tags: { builder: 2, achiever: 1 },
        memory: "You became a beginner again and loved the clumsy freedom of it.",
      },
      {
        title: "Care for someone you love",
        copy: "Let the next season be measured in presence.",
        cost: -20,
        effects: { bonds: 17, wisdom: 10, vitality: -5 },
        tags: { connector: 2, mentor: 1 },
        memory: "You gave unhurried time when it mattered most.",
      },
      {
        title: "Consult on your own terms",
        copy: "Keep the useful parts of work and leave the rest behind.",
        cost: 35,
        effects: { wisdom: 8, purpose: 8, vitality: 6 },
        tags: { mentor: 2, achiever: 1 },
        memory: "You made experience serve your life instead of consuming it.",
      },
    ],
  },
  {
    age: 74,
    stage: "LATE LIGHT",
    title: "The view from here.",
    type: "LIFE EVENT",
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
  {
    age: 81,
    stage: "ADAPTATION",
    title: "The world asks you to slow down.",
    type: "LATE-LIFE CHALLENGE",
    copy: "Stairs become negotiations. Night driving loses its ease. Independence, once automatic, now asks to be redesigned rather than surrendered.",
    quote: "Accepting change is not the same as giving up.",
    caption: "A NEW RHYTHM",
    symbol: "⌁",
    color: "#7d8d91",
    choices: [
      {
        title: "Adapt the old home",
        copy: "Change the space so the life inside it can continue.",
        cost: -30,
        effects: { vitality: 10, wisdom: 5, purpose: 3 },
        tags: { builder: 1, survivor: 1 },
        memory: "You changed your surroundings without surrendering your sense of home.",
      },
      {
        title: "Move closer to your people",
        copy: "Let convenience and company matter more than old pride.",
        cost: -15,
        effects: { bonds: 13, vitality: 6, purpose: 5 },
        tags: { connector: 2, gardener: 1 },
        memory: "You traded a little independence for many more ordinary hellos.",
      },
      {
        title: "Accept help with grace",
        copy: "Allow receiving care to become another form of giving trust.",
        cost: 0,
        effects: { wisdom: 10, bonds: 9, vitality: 4 },
        tags: { survivor: 1, scholar: 1 },
        memory: "You learned that receiving could be its own kind of generosity.",
      },
    ],
  },
  {
    age: 88,
    stage: "LEGACY",
    title: "One ordinary morning remains.",
    type: "FINAL CHAPTER",
    copy: "Sunlight crosses the room slowly. There is nowhere else you need to be. Your life is no longer a question waiting to be answered—it is the answer you made.",
    quote: "The days were long. The life was brief. It was yours.",
    caption: "THE LIFE YOU MADE",
    symbol: "☼",
    color: "#d98964",
    choices: [
      {
        title: "Gather everyone close",
        copy: "Fill the room with names, noise, stories, and hands.",
        cost: -25,
        effects: { bonds: 16, purpose: 9, vitality: 2 },
        tags: { connector: 2, mentor: 1 },
        memory: "You ended where every human story begins: among other people.",
      },
      {
        title: "Make peace with unfinished things",
        copy: "Let an imperfect life be whole without being complete.",
        cost: 0,
        effects: { wisdom: 15, vitality: 7, purpose: 8 },
        tags: { survivor: 1, scholar: 1 },
        memory: "You forgave the unfinished parts and called the whole thing enough.",
      },
      {
        title: "Watch one more sunrise",
        copy: "Meet the familiar world with undiminished wonder.",
        cost: -5,
        effects: { purpose: 14, wisdom: 8, vitality: 4 },
        tags: { explorer: 2, gardener: 1 },
        memory: "At the end, you still found the world worth watching.",
      },
    ],
  },
];

const endings = [
  {
    id: "phoenix",
    title: "The Weathered Gold",
    symbol: "≈",
    test: (s) => s.tags.survivor >= 8 || s.vitality < 20,
    copy: "Life asked more of you than seemed fair. Still, you made something tender from the wreckage and refused to let hardship have the final word.",
    quote: "You were not unbroken. You were beautifully remade.",
  },
  {
    id: "garden",
    title: "The Quiet Garden",
    symbol: "❋",
    test: (s) => s.tags.gardener >= 3 && s.vitality >= 55,
    copy: "Your life did not need to be loud to be full. You tended to your days and your people, and both grew toward the light.",
    quote: "Enough was not a compromise. It was an art.",
  },
  {
    id: "beacon",
    title: "The Human Beacon",
    symbol: "✦",
    test: (s) => s.tags.connector >= 9 && s.bonds >= 85 && s.purpose >= 70,
    copy: "People remember how the room changed when you entered it. You made others feel seen, then showed them how to see one another.",
    quote: "A life shared became a light multiplied.",
  },
  {
    id: "architect",
    title: "The Lasting Architect",
    symbol: "▱",
    test: (s) => s.dollars + s.assetValue >= 180 || (s.tags.builder >= 7 && s.purpose >= 78),
    copy: "You turned patience and effort into things that endured. What you built kept sheltering people long after you stepped away.",
    quote: "You measured wealth by what could keep giving.",
  },
  {
    id: "wild",
    title: "The Wild Compass",
    symbol: "↗",
    test: (s) => s.tags.explorer >= 8 && s.purpose >= 72,
    copy: "You never confused the familiar with the necessary. Your life crossed borders, literal and otherwise, and came home larger each time.",
    quote: "Wonder was the direction you trusted most.",
  },
  {
    id: "sage",
    title: "The Open Book",
    symbol: "◌",
    test: (s) => s.wisdom >= 90 && s.tags.scholar + s.tags.mentor >= 8,
    copy: "You kept learning, especially when certainty would have been easier. In time, people sought you not for answers, but for better questions.",
    quote: "Every chapter taught you how much remained unread.",
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
  version: GAME_VERSION,
  name: "Rowan",
  started: false,
  chapter: 0,
  ended: false,
  dollars: 0,
  assetValue: 0,
  inventory: [],
  vitality: 0,
  purpose: 0,
  wisdom: 0,
  bonds: 0,
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
  relationships: Object.fromEntries(
    relationshipDefinitions.map((person) => [
      person.id,
      { bond: person.startingBond, lastConnectedChapter: -1 },
    ]),
  ),
  memories: [],
});

let state = freshState();
let soundEnabled = true;
let savedProgress = null;

const elements = {
  age: document.querySelector("#age-value"),
  ageRing: document.querySelector("#age-ring"),
  begin: document.querySelector("#begin-button"),
  chapterLabel: document.querySelector("#chapter-label"),
  chapterProgress: document.querySelector("#chapter-progress"),
  choices: document.querySelector("#choices"),
  continueButton: document.querySelector("#continue-button"),
  continueLabel: document.querySelector("#continue-label"),
  dollarCount: document.querySelector("#dollar-count"),
  copyEnding: document.querySelector("#copy-ending"),
  endingCopy: document.querySelector("#ending-copy"),
  endingModal: document.querySelector("#ending-modal"),
  endingQuote: document.querySelector("#ending-quote"),
  endingStats: document.querySelector("#ending-stats"),
  endingLedger: document.querySelector("#ending-ledger"),
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
  inventoryCount: document.querySelector("#inventory-count"),
  inventoryList: document.querySelector("#inventory-list"),
  nameInput: document.querySelector("#name-input"),
  pathCount: document.querySelector("#path-count"),
  pathMarkers: document.querySelector("#path-markers"),
  pathSummary: document.querySelector("#path-summary"),
  playAgain: document.querySelector("#play-again"),
  peopleCount: document.querySelector("#people-count"),
  peopleList: document.querySelector("#people-list"),
  peopleModal: document.querySelector("#people-modal"),
  peopleToggle: document.querySelector("#people-toggle"),
  playerName: document.querySelector("#player-name"),
  playerTitle: document.querySelector("#player-title"),
  restart: document.querySelector("#restart-button"),
  resumeSeparator: document.querySelector("#resume-separator"),
  sound: document.querySelector("#sound-toggle"),
  shopBalance: document.querySelector("#shop-balance"),
  shopList: document.querySelector("#shop-list"),
  shopModal: document.querySelector("#shop-modal"),
  shopToggle: document.querySelector("#shop-toggle"),
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
  elements.inventoryCount.textContent = state.inventory.length;
  elements.peopleCount.textContent = getUnlockedRelationships().length;

  elements.choices.innerHTML = chapter.choices.map(renderChoice).join("");
  elements.choices.querySelectorAll(".choice").forEach((button, index) => {
    button.addEventListener("click", () => choose(index));
  });

  renderRelationships();
  renderShop();

  saveProgress();
}

function getUnlockedRelationships() {
  const age = chapters[state.chapter].age;
  return relationshipDefinitions.filter((person) => person.unlockAge <= age);
}

function getBondLevel(value) {
  if (value >= 80) return "UNBREAKABLE";
  if (value >= 60) return "TRUSTED";
  if (value >= 40) return "CLOSE";
  if (value >= 20) return "FAMILIAR";
  return "DISTANT";
}

function renderRelationships() {
  const age = chapters[state.chapter].age;
  elements.peopleList.innerHTML = relationshipDefinitions
    .map((person) => {
      const unlocked = person.unlockAge <= age;
      if (!unlocked) {
        return `
          <article class="person-card person-card--locked">
            <div class="person-card__avatar">?</div>
            <div class="person-card__main">
              <div class="person-card__heading"><h3>Someone ahead</h3><span>LOCKED</span></div>
            </div>
            <p>THIS RELATIONSHIP ENTERS YOUR LIFE AT AGE ${person.unlockAge}</p>
          </article>`;
      }

      const relationship = state.relationships[person.id];
      const connected = relationship.lastConnectedChapter === state.chapter;
      return `
        <article class="person-card">
          <div class="person-card__avatar" style="--person-color: ${person.color}">${person.name[0]}</div>
          <div class="person-card__main">
            <div class="person-card__heading"><h3>${person.name}</h3><span>${person.role}</span></div>
            <div class="person-card__bond-label"><span>${getBondLevel(relationship.bond)}</span><strong>${relationship.bond} / 100</strong></div>
            <div class="bond-track"><i style="width: ${relationship.bond}%"></i></div>
            <button class="bond-action" type="button" data-bond-person="${person.id}" ${connected || state.ended ? "disabled" : ""}>
              <span>${connected ? "TIME SPENT THIS CHAPTER" : "SPEND TIME TOGETHER"}</span><strong>${connected ? "✓" : "+7"}</strong>
            </button>
          </div>
        </article>`;
    })
    .join("");

  elements.peopleList.querySelectorAll("[data-bond-person]").forEach((button) => {
    button.addEventListener("click", () => spendTimeWith(button.dataset.bondPerson));
  });
}

function spendTimeWith(personId) {
  const person = relationshipDefinitions.find((candidate) => candidate.id === personId);
  const relationship = state.relationships[personId];
  if (
    !person ||
    !relationship ||
    person.unlockAge > chapters[state.chapter].age ||
    relationship.lastConnectedChapter === state.chapter ||
    state.ended
  ) return;

  relationship.bond = clamp(relationship.bond + 7);
  relationship.lastConnectedChapter = state.chapter;
  state.bonds = clamp(state.bonds + 2);
  showToast(`Time with ${person.name} strengthened your bond`);
  playTone(470);
  render();
}

function describeEffects(item) {
  const labels = { vitality: "VITALITY", purpose: "PURPOSE", wisdom: "WISDOM", bonds: "BONDS" };
  return Object.entries(item.effects)
    .map(([key, value]) => `+${value} ${labels[key]}`)
    .join(" · ");
}

function renderShop() {
  const age = chapters[state.chapter].age;
  elements.shopBalance.textContent = `$${state.dollars}`;
  elements.shopList.innerHTML = shopItems
    .map((item) => {
      const owned = state.inventory.includes(item.id);
      const ageLocked = age < item.minAge;
      const cannotAfford = state.dollars < item.price;
      const buttonLabel = owned ? "OWNED ✓" : ageLocked ? `AGE ${item.minAge}` : cannotAfford ? `NEED $${item.price}` : `BUY $${item.price}`;
      return `
        <article class="shop-item ${owned ? "shop-item--owned" : ""}">
          <div class="shop-item__icon" style="--item-color: ${item.color}">${item.icon}</div>
          <h3>${item.name}</h3>
          <span class="shop-item__age">FROM AGE ${item.minAge}</span>
          <p>${item.copy}</p>
          <span class="shop-item__effects">${describeEffects(item)}</span>
          <button class="buy-button" type="button" data-buy-item="${item.id}" ${owned || ageLocked || cannotAfford || state.ended ? "disabled" : ""}>${buttonLabel}</button>
        </article>`;
    })
    .join("");

  const ownedItems = state.inventory
    .map((itemId) => shopItems.find((item) => item.id === itemId))
    .filter(Boolean);
  elements.inventoryList.innerHTML = ownedItems.length
    ? ownedItems.map((item) => `<span class="inventory-chip">${item.icon} ${item.name}</span>`).join("")
    : "Nothing yet. Earn dollars and choose what matters to you.";

  elements.shopList.querySelectorAll("[data-buy-item]").forEach((button) => {
    button.addEventListener("click", () => buyItem(button.dataset.buyItem));
  });
}

function buyItem(itemId) {
  const item = shopItems.find((candidate) => candidate.id === itemId);
  if (
    !item ||
    state.inventory.includes(item.id) ||
    item.minAge > chapters[state.chapter].age ||
    state.dollars < item.price ||
    state.ended
  ) return;

  state.dollars -= item.price;
  state.assetValue += item.price;
  state.inventory.push(item.id);
  Object.entries(item.effects).forEach(([key, value]) => {
    state[key] = clamp(state[key] + value);
  });
  Object.entries(item.relationshipEffects || {}).forEach(([personId, value]) => {
    if (state.relationships[personId]) {
      state.relationships[personId].bond = clamp(state.relationships[personId].bond + value);
    }
  });
  showToast(`${item.name} added to your life`);
  playTone(540);
  render();
}

function applyChoiceRelationshipEffects(choice) {
  const age = chapters[state.chapter].age;
  const explicitEffects = choiceBondEffects[choice.title] || {};
  relationshipDefinitions.forEach((person) => {
    if (person.unlockAge > age) return;
    const fallback = choice.effects.bonds > 0
      ? Math.max(1, Math.round(choice.effects.bonds / 8))
      : choice.effects.bonds < 0 ? -2 : -1;
    const change = explicitEffects[person.id] ?? fallback;
    state.relationships[person.id].bond = clamp(state.relationships[person.id].bond + change);
  });
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
  applyChoiceRelationshipEffects(choice);
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
  const trustedPeople = relationshipDefinitions.filter(
    (person) => state.relationships[person.id].bond >= 60,
  ).length;
  elements.endingLedger.textContent = `${state.inventory.length} POSSESSIONS KEPT · $${state.assetValue} OWNED VALUE · ${trustedPeople} CLOSE BONDS`;
  elements.endingModal.hidden = false;
  elements.endingModal.dataset.ending = ending.id;
  playTone(520);
}

function startLife() {
  const name = elements.nameInput.value.trim();
  state = freshState();
  state.name = name || "Rowan";
  state.started = true;
  savedProgress = null;
  elements.introModal.hidden = true;
  elements.endingModal.hidden = true;
  closeSystemModals();
  render();
  playTone(380);
}

function continueLife() {
  if (!savedProgress) return;
  state = savedProgress;
  elements.introModal.hidden = true;
  closeSystemModals();
  render();
  if (state.ended) window.setTimeout(showEnding, 0);
  playTone(380);
}

function restartLife() {
  localStorage.removeItem("life-rpg-progress");
  state = freshState();
  savedProgress = null;
  elements.nameInput.value = state.name;
  elements.continueButton.hidden = true;
  elements.resumeSeparator.hidden = true;
  elements.endingModal.hidden = true;
  closeSystemModals();
  elements.introModal.hidden = false;
  render();
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

function readSavedProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("life-rpg-progress"));
    if (
      saved?.version !== GAME_VERSION ||
      !saved.started ||
      !Number.isInteger(saved.chapter) ||
      saved.chapter >= chapters.length
    ) {
      localStorage.removeItem("life-rpg-progress");
      return null;
    }
    const restoredDollars = saved.dollars ?? saved.coins ?? freshState().dollars;
    const defaults = freshState();
    const restoredInventory = Array.isArray(saved.inventory) ? saved.inventory : [];
    return {
      ...defaults,
      ...saved,
      dollars: restoredDollars,
      assetValue: saved.assetValue ?? restoredInventory.reduce((total, itemId) => {
        return total + (shopItems.find((item) => item.id === itemId)?.price || 0);
      }, 0),
      inventory: restoredInventory,
      tags: { ...defaults.tags, ...saved.tags },
      relationships: Object.fromEntries(
        relationshipDefinitions.map((person) => [
          person.id,
          { ...defaults.relationships[person.id], ...saved.relationships?.[person.id] },
        ]),
      ),
    };
  } catch {
    return null;
  }
}

function offerSavedProgress(saved) {
  savedProgress = saved;
  elements.nameInput.value = saved.name;
  elements.continueButton.hidden = false;
  elements.resumeSeparator.hidden = false;
  elements.continueLabel.textContent = saved.ended
    ? `View ${saved.name}'s ending`
    : `Continue ${saved.name} at age ${chapters[saved.chapter].age}`;
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
    showToast("Ending copied");
  } catch {
    showToast("Could not access clipboard");
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1800);
}

function openSystemModal(modal) {
  if (!state.started) return;
  closeSystemModals();
  modal.hidden = false;
}

function closeSystemModals() {
  elements.peopleModal.hidden = true;
  elements.shopModal.hidden = true;
}

elements.begin.addEventListener("click", startLife);
elements.continueButton.addEventListener("click", continueLife);
elements.nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") startLife();
});
elements.restart.addEventListener("click", restartLife);
elements.playAgain.addEventListener("click", restartLife);
elements.copyEnding.addEventListener("click", copyEnding);
elements.peopleToggle.addEventListener("click", () => openSystemModal(elements.peopleModal));
elements.shopToggle.addEventListener("click", () => openSystemModal(elements.shopModal));
document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeSystemModals);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSystemModals();
});
elements.sound.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  elements.sound.classList.toggle("is-muted", !soundEnabled);
  elements.sound.setAttribute("aria-label", soundEnabled ? "Mute sound" : "Enable sound");
  if (soundEnabled) playTone(440);
});

buildStaticUI();
render();
const restoredProgress = readSavedProgress();
if (restoredProgress) offerSavedProgress(restoredProgress);

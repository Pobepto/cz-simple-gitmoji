export interface GitMoji {
  emoji: string;
  code: string;
  description: string;
  name: string;
}

export interface GitMojiChoice {
  name: string;
  value: { emoji: string; code: string };
  code: string;
}

export const MAX_HEAD_LINE_WIDTH = 100;
export const MAX_SUBJECT_LINE_WIDTH = 75;

export const GIT_MOJIS: GitMoji[] = [
  {
    emoji: "🎨",
    code: ":art:",
    description: "Improve structure / format of the code.",
    name: "art",
  },
  {
    emoji: "⚡️",
    code: ":zap:",
    description: "Improve performance.",
    name: "zap",
  },
  {
    emoji: "🔥",
    code: ":fire:",
    description: "Remove code or files.",
    name: "fire",
  },
  {
    emoji: "🐛",
    code: ":bug:",
    description: "Fix a bug.",
    name: "bug",
  },
  {
    emoji: "🚑️",
    code: ":ambulance:",
    description: "Critical hotfix.",
    name: "ambulance",
  },
  {
    emoji: "✨",
    code: ":sparkles:",
    description: "Introduce new features.",
    name: "sparkles",
  },
  {
    emoji: "📝",
    code: ":memo:",
    description: "Add or update documentation.",
    name: "memo",
  },
  {
    emoji: "🚀",
    code: ":rocket:",
    description: "Deploy stuff.",
    name: "rocket",
  },
  {
    emoji: "💄",
    code: ":lipstick:",
    description: "Add or update the UI and style files.",
    name: "lipstick",
  },
  {
    emoji: "🎉",
    code: ":tada:",
    description: "Begin a project.",
    name: "tada",
  },
  {
    emoji: "✅",
    code: ":white_check_mark:",
    description: "Add, update, or pass tests.",
    name: "white-check-mark",
  },
  {
    emoji: "🔒️",
    code: ":lock:",
    description: "Fix security issues.",
    name: "lock",
  },
  {
    emoji: "🔐",
    code: ":closed_lock_with_key:",
    description: "Add or update secrets.",
    name: "closed-lock-with-key",
  },
  {
    emoji: "🔖",
    code: ":bookmark:",
    description: "Release / Version tags.",
    name: "bookmark",
  },
  {
    emoji: "🚨",
    code: ":rotating_light:",
    description: "Fix compiler / linter warnings.",
    name: "rotating-light",
  },
  {
    emoji: "🚧",
    code: ":construction:",
    description: "Work in progress.",
    name: "construction",
  },
  {
    emoji: "💚",
    code: ":green_heart:",
    description: "Fix CI Build.",
    name: "green-heart",
  },
  {
    emoji: "⬇️",
    code: ":arrow_down:",
    description: "Downgrade dependencies.",
    name: "arrow-down",
  },
  {
    emoji: "⬆️",
    code: ":arrow_up:",
    description: "Upgrade dependencies.",
    name: "arrow-up",
  },
  {
    emoji: "📌",
    code: ":pushpin:",
    description: "Pin dependencies to specific versions.",
    name: "pushpin",
  },
  {
    emoji: "👷",
    code: ":construction_worker:",
    description: "Add or update CI build system.",
    name: "construction-worker",
  },
  {
    emoji: "📈",
    code: ":chart_with_upwards_trend:",
    description: "Add or update analytics or track code.",
    name: "chart-with-upwards-trend",
  },
  {
    emoji: "♻️",
    code: ":recycle:",
    description: "Refactor code.",
    name: "recycle",
  },
  {
    emoji: "➕",
    code: ":heavy_plus_sign:",
    description: "Add a dependency.",
    name: "heavy-plus-sign",
  },
  {
    emoji: "➖",
    code: ":heavy_minus_sign:",
    description: "Remove a dependency.",
    name: "heavy-minus-sign",
  },
  {
    emoji: "🔧",
    code: ":wrench:",
    description: "Add or update configuration files.",
    name: "wrench",
  },
  {
    emoji: "🔨",
    code: ":hammer:",
    description: "Add or update development scripts.",
    name: "hammer",
  },
  {
    emoji: "🌐",
    code: ":globe_with_meridians:",
    description: "Internationalization and localization.",
    name: "globe-with-meridians",
  },
  {
    emoji: "✏️",
    code: ":pencil2:",
    description: "Fix typos.",
    name: "pencil2",
  },
  {
    emoji: "💩",
    code: ":poop:",
    description: "Write bad code that needs to be improved.",
    name: "poop",
  },
  {
    emoji: "⏪️",
    code: ":rewind:",
    description: "Revert changes.",
    name: "rewind",
  },
  {
    emoji: "🔀",
    code: ":twisted_rightwards_arrows:",
    description: "Merge branches.",
    name: "twisted-rightwards-arrows",
  },
  {
    emoji: "📦️",
    code: ":package:",
    description: "Add or update compiled files or packages.",
    name: "package",
  },
  {
    emoji: "👽️",
    code: ":alien:",
    description: "Update code due to external API changes.",
    name: "alien",
  },
  {
    emoji: "🚚",
    code: ":truck:",
    description: "Move or rename resources (e.g.: files, paths, routes).",
    name: "truck",
  },
  {
    emoji: "📄",
    code: ":page_facing_up:",
    description: "Add or update license.",
    name: "page-facing-up",
  },
  {
    emoji: "💥",
    code: ":boom:",
    description: "Introduce breaking changes.",
    name: "boom",
  },
  {
    emoji: "🍱",
    code: ":bento:",
    description: "Add or update assets.",
    name: "bento",
  },
  {
    emoji: "♿️",
    code: ":wheelchair:",
    description: "Improve accessibility.",
    name: "wheelchair",
  },
  {
    emoji: "💡",
    code: ":bulb:",
    description: "Add or update comments in source code.",
    name: "bulb",
  },
  {
    emoji: "🍻",
    code: ":beers:",
    description: "Write code drunkenly.",
    name: "beers",
  },
  {
    emoji: "💬",
    code: ":speech_balloon:",
    description: "Add or update text and literals.",
    name: "speech-balloon",
  },
  {
    emoji: "🗃️",
    code: ":card_file_box:",
    description: "Perform database related changes.",
    name: "card-file-box",
  },
  {
    emoji: "🔊",
    code: ":loud_sound:",
    description: "Add or update logs.",
    name: "loud-sound",
  },
  {
    emoji: "🔇",
    code: ":mute:",
    description: "Remove logs.",
    name: "mute",
  },
  {
    emoji: "👥",
    code: ":busts_in_silhouette:",
    description: "Add or update contributor(s).",
    name: "busts-in-silhouette",
  },
  {
    emoji: "🚸",
    code: ":children_crossing:",
    description: "Improve user experience / usability.",
    name: "children-crossing",
  },
  {
    emoji: "🏗️",
    code: ":building_construction:",
    description: "Make architectural changes.",
    name: "building-construction",
  },
  {
    emoji: "📱",
    code: ":iphone:",
    description: "Work on responsive design.",
    name: "iphone",
  },
  {
    emoji: "🤡",
    code: ":clown_face:",
    description: "Mock things.",
    name: "clown-face",
  },
  {
    emoji: "🥚",
    code: ":egg:",
    description: "Add or update an easter egg.",
    name: "egg",
  },
  {
    emoji: "🙈",
    code: ":see_no_evil:",
    description: "Add or update a .gitignore file.",
    name: "see-no-evil",
  },
  {
    emoji: "📸",
    code: ":camera_flash:",
    description: "Add or update snapshots.",
    name: "camera-flash",
  },
  {
    emoji: "⚗️",
    code: ":alembic:",
    description: "Perform experiments.",
    name: "alembic",
  },
  {
    emoji: "🔍️",
    code: ":mag:",
    description: "Improve SEO.",
    name: "mag",
  },
  {
    emoji: "🏷️",
    code: ":label:",
    description: "Add or update types.",
    name: "label",
  },
  {
    emoji: "🌱",
    code: ":seedling:",
    description: "Add or update seed files.",
    name: "seedling",
  },
  {
    emoji: "🚩",
    code: ":triangular_flag_on_post:",
    description: "Add, update, or remove feature flags.",
    name: "triangular-flag-on-post",
  },
  {
    emoji: "🥅",
    code: ":goal_net:",
    description: "Catch errors.",
    name: "goal-net",
  },
  {
    emoji: "💫",
    code: ":dizzy:",
    description: "Add or update animations and transitions.",
    name: "animation",
  },
  {
    emoji: "🗑️",
    code: ":wastebasket:",
    description: "Deprecate code that needs to be cleaned up.",
    name: "wastebasket",
  },
  {
    emoji: "🛂",
    code: ":passport_control:",
    description:
      "Work on code related to authorization, roles and permissions.",
    name: "passport-control",
  },
  {
    emoji: "🩹",
    code: ":adhesive_bandage:",
    description: "Simple fix for a non-critical issue.",
    name: "adhesive-bandage",
  },
  {
    emoji: "🧐",
    code: ":monocle_face:",
    description: "Data exploration/inspection.",
    name: "monocle-face",
  },
  {
    emoji: "⚰️",
    code: ":coffin:",
    description: "Remove dead code.",
    name: "coffin",
  },
  {
    emoji: "🧪",
    code: ":test_tube:",
    description: "Add a failing test.",
    name: "test-tube",
  },
  {
    emoji: "👔",
    code: ":necktie:",
    description: "Add or update business logic",
    name: "necktie",
  },
  {
    emoji: "🩺",
    code: ":stethoscope:",
    description: "Add or update healthcheck.",
    name: "stethoscope",
  },
  {
    emoji: "🧱",
    code: ":bricks:",
    description: "Infrastructure related changes.",
    name: "bricks",
  },
  {
    emoji: "🧑‍💻",
    code: ":technologist:",
    description: "Improve developer experience",
    name: "technologist",
  },
];

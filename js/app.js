/* =========================================================
   THEME
========================================================= */

function initializeTheme() {
  const saved = localStorage.getItem("song-library-theme");

  if (saved === "dark") {
    document.documentElement.classList.add("dark");

    return;
  }

  if (saved === "light") {
    document.documentElement.classList.remove("dark");

    return;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");

  localStorage.setItem("song-library-theme", isDark ? "dark" : "light");

  router();
}

/* =========================================================
   SEARCH
========================================================= */

function homeSearch(event) {
  event.preventDefault();

  const input = document.getElementById("homeSearchInput");

  if (!input) {
    return;
  }

  const query = input.value.trim();

  if (!query) {
    location.hash = "#/search";
    return;
  }

  location.hash = "#/search?q=" + encodeURIComponent(query);
}

function searchPageSubmit(event) {
  event.preventDefault();

  const input = document.getElementById("searchPageInput");

  if (!input) {
    return;
  }

  const query = input.value.trim();

  location.hash = "#/search?q=" + encodeURIComponent(query);
}

/* =========================================================
   FONT SIZE
========================================================= */

function changeFontSize() {
  state.fontSize += 2;

  if (state.fontSize > 28) {
    state.fontSize = 18;
  }

  const lyrics = document.getElementById("lyrics");

  if (lyrics) {
    lyrics.style.fontSize = `${state.fontSize}px`;
  }
}

/* =========================================================
   COPY
========================================================= */

async function copySong(id) {
  const song = getSong(id);

  if (!song) {
    return;
  }

  try {
    await navigator.clipboard.writeText(`${song.title}\n\n${song.lyrics}`);

    alert("Lyrics copied to clipboard.");
  } catch (error) {
    console.error("Copy failed:", error);

    alert("Unable to copy lyrics.");
  }
}

/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener("keydown", (event) => {
  const activeElement = document.activeElement;

  const tag = activeElement?.tagName;

  if (event.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
    event.preventDefault();

    location.hash = "#/search";
  }
});

/* =========================================================
   ROUTER EVENT
========================================================= */

window.addEventListener("hashchange", router);

/* =========================================================
   APPLICATION INITIALIZATION
========================================================= */

async function initializeApp() {
  const app = document.getElementById("app");

  try {
    initializeTheme();

    await initDatabase();

    /*
     * IMPORTANT:
     *
     * Load the database data BEFORE
     * calling router().
     *
     * This fixes the old:
     *
     * ReferenceError: books is not defined
     *
     * / empty-data initialization issue.
     */
    loadApplicationData();

    router();

    console.log("Song Library initialized successfully.");
  } catch (error) {
    console.error("Application initialization failed:", error);

    if (app) {
      app.innerHTML = `
                <div
                    class="
                        flex
                        min-h-screen
                        items-center
                        justify-center
                        bg-slate-50
                        px-4
                        dark:bg-slate-950
                    "
                >

                    <div class="max-w-md text-center">

                        <div class="text-5xl">
                            ⚠️
                        </div>

                        <h1
                            class="
                                mt-5
                                text-2xl
                                font-bold
                            "
                        >
                            Unable to Load Song Library
                        </h1>

                        <p
                            class="
                                mt-3
                                text-sm
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Please make sure the SQLite database
                            exists at
                            <code>
                                ./db/songs.sqlite
                            </code>
                        </p>

                        <button
                            onclick="location.reload()"
                            class="
                                mt-6
                                rounded-lg
                                bg-emerald-600
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                hover:bg-emerald-700
                            "
                        >
                            Try Again
                        </button>

                    </div>

                </div>
            `;
    }
  }
}

/* =========================================================
   START
========================================================= */

initializeApp();

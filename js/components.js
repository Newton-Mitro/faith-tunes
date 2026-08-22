/* =========================================================
   HELPERS
========================================================= */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getBook(id) {
  return books.find((book) => book.id === Number(id));
}

function getCategory(id) {
  return categories.find((category) => category.id === Number(id));
}

function getSong(id) {
  return songs.find((song) => song.id === Number(id));
}

function getBookSongs(bookId) {
  return songs.filter((song) => song.bookId === Number(bookId));
}

function getCategorySongs(categoryId) {
  return songs.filter((song) => song.categoryId === Number(categoryId));
}

function isFavorite(songId) {
  return state.favorites.includes(Number(songId));
}

function saveFavorites() {
  localStorage.setItem(
    "song-library-favorites",
    JSON.stringify(state.favorites),
  );
}

function toggleFavorite(songId) {
  songId = Number(songId);

  if (state.favorites.includes(songId)) {
    state.favorites = state.favorites.filter((id) => id !== songId);
  } else {
    state.favorites.push(songId);
  }

  saveFavorites();

  router();
}

/* =========================================================
   HEADER
========================================================= */

function renderHeader() {
  return `
        <header
            class="
                sticky
                top-0
                z-50
                border-b
                border-slate-200
                bg-white/95
                backdrop-blur
                dark:border-slate-800
                dark:bg-slate-950/95
            "
        >

            <div
                class="
                    mx-auto
                    flex
                    h-16
                    max-w-7xl
                    items-center
                    justify-between
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                <a
                    href="#/"
                    class="flex items-center gap-3"
                >

                    <div
                        class="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-emerald-600
                            text-white
                        "
                    >
                        ${icons.music}
                    </div>

                    <div>
                        <h1 class="font-bold">
                            Faith Tunes
                        </h1>

                        <p
                            class="
                                hidden
                                text-xs
                                text-slate-500
                                dark:text-slate-400
                                sm:block
                            "
                        >
                            Songs & Hymns Collection
                        </p>
                    </div>

                </a>

                <nav class="hidden items-center gap-2 md:flex">

                    <a
                        href="#/"
                        class="nav-link"
                    >
                        Home
                    </a>

                    <a
                        href="#/books"
                        class="nav-link"
                    >
                        Song Books
                    </a>

                    <a
                        href="#/categories"
                        class="nav-link"
                    >
                        Categories
                    </a>

                    <a
                        href="#/songs"
                        class="nav-link"
                    >
                        Songs
                    </a>

                </nav>

                <div class="flex items-center gap-1">

                    <a
                        href="#/search"
                        class="
                            rounded-lg
                            p-2.5
                            text-slate-500
                            hover:bg-slate-100
                            hover:text-emerald-600
                            dark:hover:bg-slate-800
                        "
                        title="Search"
                    >
                        ${icons.search}
                    </a>

                    <button
                        onclick="toggleTheme()"
                        class="
                            rounded-lg
                            p-2.5
                            text-slate-500
                            hover:bg-slate-100
                            hover:text-emerald-600
                            dark:hover:bg-slate-800
                        "
                        title="Toggle theme"
                    >
                        <span id="themeIcon">
                            ${
                              document.documentElement.classList.contains(
                                "dark",
                              )
                                ? icons.sun
                                : icons.moon
                            }
                        </span>
                    </button>

                    <a
                        href="#/favorites"
                        class="
                            relative
                            rounded-lg
                            p-2.5
                            text-slate-500
                            hover:bg-slate-100
                            hover:text-emerald-600
                            dark:hover:bg-slate-800
                        "
                        title="Favorites"
                    >

                        ${icons.heart}

                        ${
                          state.favorites.length
                            ? `
                                    <span
                                        class="
                                            absolute
                                            -right-0.5
                                            -top-0.5
                                            flex
                                            h-4
                                            min-w-4
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-emerald-600
                                            px-1
                                            text-[10px]
                                            font-bold
                                            text-white
                                        "
                                    >
                                        ${state.favorites.length}
                                    </span>
                                `
                            : ""
                        }

                    </a>

                </div>

            </div>

        </header>
    `;
}

/* =========================================================
   FOOTER
========================================================= */

function renderFooter() {
  return `
        <footer
            class="
                mt-auto
                border-t
                border-slate-200
                bg-white
                dark:border-slate-800
                dark:bg-slate-950
            "
        >

            <div
                class="
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    gap-4
                    px-4
                    py-8
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:px-6
                    lg:px-8
                "
            >

                <div>
                    <p class="font-semibold">
                        Faith Tunes
                    </p>

                    <p
                        class="
                            mt-1
                            text-sm
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Browse songs, hymns and song books.
                    </p>
                </div>

                <p
                    class="
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    © 2026 Faith Tunes
                </p>

            </div>

        </footer>
    `;
}

/* =========================================================
   NAV LINK
========================================================= */

function navLink(url, label) {
  return `
        <a
            href="${url}"
            class="nav-link"
        >
            ${label}
        </a>
    `;
}

/* =========================================================
   SONG CARD
========================================================= */

function songCard(song) {
  const category = getCategory(song.categoryId);
  const book = getBook(song.bookId);

  console.log(song);

  return `
        <a
            href="#/song/${song.id}"
            class="
                group
                flex
                items-center
                gap-4
                border-b
                border-slate-200
                p-4
                last:border-0
                hover:bg-slate-50
                dark:border-slate-800
                dark:hover:bg-slate-900
            "
        >

            <div
                class="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-50
                    text-sm
                    font-bold
                    text-emerald-600
                    dark:bg-emerald-950
                "
            >
                ${escapeHtml(song.number)}
            </div>

            <div class="min-w-0 flex-1">

                <h3
                    class="
                        truncate
                        font-semibold
                        group-hover:text-emerald-600
                    "
                >
                    ${escapeHtml(song?.title || "No title")}
                </h3>

                <p
                    class="
                        mt-1
                        truncate
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    ${escapeHtml(book?.title || "Unknown book")}

                    <span class="mx-1">•</span>

                    ${escapeHtml(category?.name || "Uncategorized")}
                </p>

            </div>

            ${
              isFavorite(song.id)
                ? `
                        <span class="text-emerald-600">
                            ${icons.heart}
                        </span>
                    `
                : ""
            }

            <span
                class="
                    text-slate-400
                    group-hover:text-emerald-600
                "
            >
                ${icons.arrow}
            </span>

        </a>
    `;
}

/* =========================================================
   STAT CARD
========================================================= */

function statCard(value, label) {
  return `
        <div
            class="
                border-r
                border-slate-200
                px-4
                py-6
                text-center
                last:border-0
                dark:border-slate-800
            "
        >

            <p class="text-2xl font-bold">
                ${escapeHtml(value)}
            </p>

            <p
                class="
                    mt-1
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                    dark:text-slate-400
                "
            >
                ${escapeHtml(label)}
            </p>

        </div>
    `;
}

/* =========================================================
   SECTION HEADER
========================================================= */

function sectionHeader(title, description, link = null, linkText = "View all") {
  return `
        <div class="flex items-end justify-between gap-4">

            <div>

                <p
                    class="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wider
                        text-emerald-600
                    "
                >
                    Explore
                </p>

                <h2 class="mt-2 text-3xl font-bold tracking-tight">
                    ${escapeHtml(title)}
                </h2>

                <p
                    class="
                        mt-2
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    ${escapeHtml(description)}
                </p>

            </div>

            ${
              link
                ? `
                        <a
                            href="${escapeHtml(link)}"
                            class="
                                hidden
                                text-sm
                                font-semibold
                                text-emerald-600
                                hover:text-emerald-700
                                sm:block
                            "
                        >
                            ${escapeHtml(linkText)}
                        </a>
                    `
                : ""
            }

        </div>
    `;
}

/* =========================================================
   BOOK CARD
========================================================= */

function bookCard(book) {
  const count = getBookSongs(book.id).length;

  return `
        <a
            href="#/book/${book.id}"
            class="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition
                hover:-translate-y-1
                hover:border-emerald-200
                hover:shadow-lg
                dark:border-slate-800
                dark:bg-slate-950
            "
        >

            <div class="flex items-start justify-between">

                <div
                    class="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-50
                        text-emerald-600
                        dark:bg-emerald-950
                    "
                >
                    ${icons.music}
                </div>

                <span
                    class="
                        rounded-full
                        bg-slate-100
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        text-slate-600
                        dark:bg-slate-800
                        dark:text-slate-300
                    "
                >
                    ${count} songs
                </span>

            </div>

            <h3
                class="
                    mt-5
                    font-bold
                    group-hover:text-emerald-600
                "
            >
                ${escapeHtml(book.title)}
            </h3>

            <p
                class="
                    mt-2
                    line-clamp-2
                    text-sm
                    leading-6
                    text-slate-500
                    dark:text-slate-400
                "
            >
                ${escapeHtml(book.description)}
            </p>

            <div
                class="
                    mt-5
                    flex
                    items-center
                    text-sm
                    font-semibold
                    text-emerald-600
                "
            >
                Browse songs

                <span class="ml-2 transition group-hover:translate-x-1">
                    ${icons.arrow}
                </span>
            </div>

        </a>
    `;
}

/* =========================================================
   CATEGORY CARD
========================================================= */

function categoryCard(category) {
  const count = getCategorySongs(category.id).length;
  console.log(category);

  return `
        <a
            href="#/category/${category.id}"
            class="
                rounded-xl
                border
                border-slate-200
                bg-white
                p-4
                transition
                hover:border-emerald-300
                hover:bg-emerald-50
                dark:border-slate-800
                dark:bg-slate-950
                dark:hover:bg-emerald-950
            "
        >

            <div class="text-2xl">
                ${escapeHtml(category.icon)}
            </div>

            <h3 class="mt-3 text-sm font-semibold">
                ${escapeHtml(category.name)}
            </h3>

            <p
                class="
                    mt-1
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                "
            >
                ${count} songs
            </p>

        </a>
    `;
}

/* =========================================================
   CATEGORY LARGE CARD
========================================================= */

function categoryLargeCard(category) {
  const count = getCategorySongs(category.id).length;

  return `
        <a
            href="#/category/${category.id}"
            class="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition
                hover:-translate-y-1
                hover:border-emerald-300
                hover:shadow-lg
                dark:border-slate-800
                dark:bg-slate-950
            "
        >

            <div class="text-4xl">
                ${escapeHtml(category.icon)}
            </div>

            <h2
                class="
                    mt-5
                    text-lg
                    font-bold
                    group-hover:text-emerald-600
                "
            >
                ${escapeHtml(category.name)}
            </h2>

            <p
                class="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                    dark:text-slate-400
                "
            >
                ${escapeHtml(category.description)}
            </p>

            <p class="mt-5 text-sm font-semibold text-emerald-600">
                ${count} songs →
            </p>

        </a>
    `;
}

/* =========================================================
   SONG META
========================================================= */

function songMeta(label, value) {
  return `
        <div>

            <p
                class="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-400
                "
            >
                ${escapeHtml(label)}
            </p>

            <p class="mt-1 text-sm font-semibold">
                ${escapeHtml(value)}
            </p>

        </div>
    `;
}

/* =========================================================
   BREADCRUMB
========================================================= */

function breadcrumb(parent, parentUrl, current) {
  return `
        <nav
            class="
                flex
                items-center
                gap-2
                text-xs
                text-slate-500
                dark:text-slate-400
            "
        >

            <a
                href="${escapeHtml(parentUrl)}"
                class="hover:text-emerald-600"
            >
                ${escapeHtml(parent)}
            </a>

            <span>/</span>

            <span
                class="
                    truncate
                    text-slate-700
                    dark:text-slate-300
                "
            >
                ${escapeHtml(current)}
            </span>

        </nav>
    `;
}

/* =========================================================
   EMPTY STATE
========================================================= */

function emptyState(message) {
  return `
        <div class="p-12 text-center">

            <div class="text-4xl">
                🎵
            </div>

            <h3 class="mt-4 font-semibold">
                Nothing here
            </h3>

            <p
                class="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                "
            >
                ${escapeHtml(message)}
            </p>

        </div>
    `;
}

/* =========================================================
   NOT FOUND
========================================================= */

function notFoundPage() {
  return `
        <div
            class="
                flex
                min-h-[70vh]
                items-center
                justify-center
                px-4
            "
        >

            <div class="text-center">

                <div class="text-6xl">
                    🎵
                </div>

                <h1 class="mt-5 text-3xl font-bold">
                    Page Not Found
                </h1>

                <p
                    class="
                        mt-2
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    The song or page you're looking for doesn't exist.
                </p>

                <a
                    href="#/"
                    class="
                        mt-6
                        inline-flex
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
                    Back to Home
                </a>

            </div>

        </div>
    `;
}

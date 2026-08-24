/* =========================================================
   HOME
========================================================= */

function homePage() {
  return `
        <div class="page-enter">

            <!-- HERO -->

            <section
                class="
                    bg-gradient-to-br
                    from-emerald-700
                    via-emerald-600
                    to-teal-600
                "
            >

                <div
                    class="
                        mx-auto
                        max-w-7xl
                        px-4
                        py-16
                        sm:px-6
                        lg:px-8
                        lg:py-20
                    "
                >

                    <div class="mx-auto max-w-3xl text-center">

                        <span
                            class="
                                inline-flex
                                rounded-full
                                bg-white/10
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-white
                            "
                        >
                            ${songs.length} songs available
                        </span>

                        <h2
                            class="
                                mt-6
                                text-4xl
                                font-bold
                                tracking-tight
                                text-white
                                sm:text-5xl
                            "
                        >
                            Find Your Song
                        </h2>

                        <p
                            class="
                                mx-auto
                                mt-4
                                max-w-2xl
                                text-emerald-50
                            "
                        >
                            Browse song books, explore categories,
                            or search the complete collection.
                        </p>

                        <form
                            onsubmit="homeSearch(event)"
                            class="relative mx-auto mt-8 max-w-2xl"
                        >

                            <div
                                class="
                                    pointer-events-none
                                    absolute
                                    inset-y-0
                                    left-0
                                    flex
                                    items-center
                                    pl-5
                                    text-slate-400
                                "
                            >
                                ${icons.search}
                            </div>

                            <input
                                id="homeSearchInput"
                                type="search"
                                placeholder="Search songs, titles or categories..."
                                class="
                                    h-14
                                    w-full
                                    rounded-2xl
                                    border-0
                                    bg-white
                                    pl-12
                                    pr-5
                                    text-slate-900
                                    shadow-xl
                                    outline-none
                                    placeholder:text-slate-400
                                "
                            >

                        </form>

                    </div>

                </div>

            </section>

            <!-- STATS -->

            <section
                class="
                    border-b
                    border-slate-200
                    bg-white
                    dark:border-slate-800
                    dark:bg-slate-950
                "
            >

                <div
                    class="
                        mx-auto
                        grid
                        max-w-7xl
                        grid-cols-2
                        sm:grid-cols-4
                    "
                >

                    ${statCard(books.length, "Song Books")}

                    ${statCard(songs.length, "Songs")}

                    ${statCard(categories.length, "Categories")}

                    ${statCard(state.favorites.length, "Favorites")}

                </div>

            </section>

            <!-- BOOKS -->

            <section class="py-16">

                <div
                    class="
                        mx-auto
                        max-w-7xl
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >

                    ${sectionHeader(
                      "Song Books",
                      "Browse songs organized into different collections.",
                      "#/books",
                      "View all",
                    )}

                    <div
                        class="
                            mt-8
                            grid
                            gap-5
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        ${
                          books.length
                            ? books.map(bookCard).join("")
                            : emptyState("No song books found.")
                        }
                    </div>

                </div>

            </section>

            <!-- CATEGORIES -->

            <section
                class="
                    border-y
                    border-slate-200
                    bg-white
                    py-16
                    dark:border-slate-800
                    dark:bg-slate-950
                "
            >

                <div
                    class="
                        mx-auto
                        max-w-7xl
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >

                    ${sectionHeader(
                      "Browse by Category",
                      "Discover songs based on their theme.",
                      "#/categories",
                      "View all",
                    )}

                    <div
                        class="
                            mt-8
                            grid
                            grid-cols-2
                            gap-3
                            sm:grid-cols-3
                            lg:grid-cols-6
                        "
                    >
                        ${
                          categories.length
                            ? categories.map(categoryCard).join("")
                            : emptyState("No categories found.")
                        }
                    </div>

                </div>

            </section>

            <!-- SONGS -->

            <section class="py-16">

                <div class="mx-auto max-w-4xl px-4 sm:px-6">

                    ${sectionHeader(
                      "Songs",
                      "Explore songs from the collection.",
                      "#/songs",
                      "View all",
                    )}

                    <div
                        class="
                            mt-6
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            dark:border-slate-800
                            dark:bg-slate-950
                        "
                    >
                        ${
                          songs.length
                            ? songs.slice(0, 6).map(songCard).join("")
                            : emptyState("No songs found.")
                        }
                    </div>

                </div>

            </section>

        </div>
    `;
}

/* =========================================================
   BOOKS
========================================================= */

function booksPage() {
  return `
        <div class="page-enter">

            <div
                class="
                    mx-auto
                    max-w-7xl
                    px-4
                    py-10
                    sm:px-6
                    lg:px-8
                "
            >

                ${breadcrumb("Home", "#/", "Song Books")}

                <div class="mt-8">

                    <p
                        class="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-emerald-600
                        "
                    >
                        Collection
                    </p>

                    <h1 class="mt-2 text-4xl font-bold">
                        Song Books
                    </h1>

                    <p
                        class="
                            mt-3
                            max-w-2xl
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Browse all available song books and discover their songs.
                    </p>

                </div>

                <div
                    class="
                        mt-10
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    "
                >
                    ${
                      books.length
                        ? books.map(bookCard).join("")
                        : emptyState("No song books found.")
                    }
                </div>

            </div>

        </div>
    `;
}

/* =========================================================
   BOOK DETAIL
========================================================= */

function bookPage(id) {
  const book = getBook(id);

  if (!book) {
    return notFoundPage();
  }

  const bookSongs = getBookSongs(book.id);

  return `
        <div class="page-enter">

            <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6">

                ${breadcrumb("Song Books", "#/books", book.title)}

                <div
                    class="
                        mt-8
                        rounded-2xl
                        bg-gradient-to-br
                        from-emerald-700
                        to-teal-600
                        p-6
                        text-white
                        sm:p-10
                    "
                >

                    <span class="text-4xl">
                        📖
                    </span>

                    <h1 class="mt-5 text-3xl font-bold sm:text-4xl">
                        ${escapeHtml(book.title)}
                    </h1>

                    <p class="mt-3 max-w-2xl text-emerald-50">
                        ${escapeHtml(book.description)}
                    </p>

                    <div class="mt-6 flex flex-wrap gap-3">

                        <span class="rounded-full bg-white/10 px-3 py-1.5 text-sm">
                            ${bookSongs.length} songs
                        </span>

                        <span class="rounded-full bg-white/10 px-3 py-1.5 text-sm">
                            ${escapeHtml(book.year)}
                        </span>

                    </div>

                </div>

                <div class="mt-10">

                    <h2 class="text-2xl font-bold">
                        Songs in this book
                    </h2>

                    <div
                        class="
                            mt-5
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            dark:border-slate-800
                            dark:bg-slate-950
                        "
                    >
                        ${
                          bookSongs.length
                            ? bookSongs.map(songCard).join("")
                            : emptyState("No songs in this book.")
                        }
                    </div>

                </div>

            </div>

        </div>
    `;
}

/* =========================================================
   CATEGORIES
========================================================= */

function categoriesPage() {
  return `
        <div class="page-enter">

            <div
                class="
                    mx-auto
                    max-w-7xl
                    px-4
                    py-10
                    sm:px-6
                    lg:px-8
                "
            >

                ${breadcrumb("Home", "#/", "Categories")}

                <div class="mt-8">

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

                    <h1 class="mt-2 text-4xl font-bold">
                        Categories
                    </h1>

                    <p
                        class="
                            mt-3
                            max-w-2xl
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Find songs by theme, occasion or purpose.
                    </p>

                </div>

                <div
                    class="
                        mt-10
                        grid
                        grid-cols-2
                        gap-4
                        sm:grid-cols-3
                        lg:grid-cols-4
                    "
                >
                    ${
                      categories.length
                        ? categories.map(categoryLargeCard).join("")
                        : emptyState("No categories found.")
                    }
                </div>

            </div>

        </div>
    `;
}

/* =========================================================
   CATEGORY DETAIL
========================================================= */

function categoryPage(id) {
  const category = getCategory(id);

  if (!category) {
    return notFoundPage();
  }

  console.log(category);

  const categorySongs = getCategorySongs(category.id);

  return `
        <div class="page-enter">

            <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6">

                ${breadcrumb("Categories", "#/categories", category.name)}

                <div
                    class="
                        mt-8
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        dark:border-slate-800
                        dark:bg-slate-950
                        sm:p-10
                    "
                >

                    <span class="text-5xl">
                        ${escapeHtml(category.icon)}
                    </span>

                    <h1 class="mt-5 text-3xl font-bold">
                        ${escapeHtml(category.name)}
                    </h1>

                    <p
                        class="
                            mt-3
                            max-w-2xl
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        ${escapeHtml(category.description)}
                    </p>

                    <p class="mt-5 text-sm font-semibold text-emerald-600">
                        ${categorySongs.length} songs
                    </p>

                </div>

                <div class="mt-10">

                    <h2 class="text-2xl font-bold">
                        Songs
                    </h2>

                    <div
                        class="
                            mt-5
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            dark:border-slate-800
                            dark:bg-slate-950
                        "
                    >
                        ${
                          categorySongs.length
                            ? categorySongs.map(songCard).join("")
                            : emptyState("No songs in this category.")
                        }
                    </div>

                </div>

            </div>

        </div>
    `;
}

/* =========================================================
   ALL SONGS
========================================================= */

function songsPage() {
  return `
        <div class="page-enter">

            <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6">

                ${breadcrumb("Home", "#/", "All Songs")}

                <div class="mt-8">

                    <h1 class="text-4xl font-bold">
                        All Songs
                    </h1>

                    <p
                        class="
                            mt-3
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Browse the complete song collection.
                    </p>

                </div>

                <div
                    class="
                        mt-8
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        dark:border-slate-800
                        dark:bg-slate-950
                    "
                >
                    ${
                      songs.length
                        ? songs.map(songCard).join("")
                        : emptyState("No songs found.")
                    }
                </div>

            </div>

        </div>
    `;
}

/* =========================================================
   SEARCH
========================================================= */

function searchPage() {
  const query =
    new URLSearchParams(location.hash.split("?")[1] || "").get("q") || "";

  state.search = query;

  const results = searchSongs(query);

  return `
        <div class="page-enter">

            <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6">

                ${breadcrumb("Home", "#/", "Search")}

                <div class="mt-8">

                    <h1 class="text-4xl font-bold">
                        Search Songs
                    </h1>

                    <form
                        onsubmit="searchPageSubmit(event)"
                        class="relative mt-6"
                    >

                        <div
                            class="
                                absolute
                                inset-y-0
                                left-0
                                flex
                                items-center
                                pl-4
                                text-slate-400
                            "
                        >
                            ${icons.search}
                        </div>

                        <input
                            id="searchPageInput"
                            type="search"
                            value="${escapeHtml(query)}"
                            placeholder="Search songs..."
                            class="
                                h-14
                                w-full
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                pl-12
                                pr-4
                                outline-none
                                focus:border-emerald-500
                                focus:ring-2
                                focus:ring-emerald-100
                                dark:border-slate-800
                                dark:bg-slate-950
                            "
                        >

                    </form>

                </div>

                <div class="mt-8">

                    ${
                      query
                        ? `
                                <p
                                    class="
                                        mb-4
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-400
                                    "
                                >
                                    ${results.length}
                                    result${results.length === 1 ? "" : "s"}
                                    for
                                    <strong>
                                        "${escapeHtml(query)}"
                                    </strong>
                                </p>
                            `
                        : ""
                    }

                    ${
                      results.length
                        ? `
                                <div
                                    class="
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white
                                        dark:border-slate-800
                                        dark:bg-slate-950
                                    "
                                >
                                    ${results.map(songCard).join("")}
                                </div>
                            `
                        : emptyState(
                            query
                              ? "No songs matched your search."
                              : "Start typing to search the faith tunes.",
                          )
                    }

                </div>

            </div>

        </div>
    `;
}

function searchSongs(query) {
  query = String(query || "")
    .toLowerCase()
    .trim();

  if (!query) {
    return songs;
  }

  return songs.filter((song) => {
    const book = getBook(song.bookId);

    const category = getCategory(song.categoryId);

    return (
      String(song.title).toLowerCase().includes(query) ||
      String(song.author).toLowerCase().includes(query) ||
      String(song.lyrics).toLowerCase().includes(query) ||
      String(book?.title || "")
        .toLowerCase()
        .includes(query) ||
      String(category?.name || "")
        .toLowerCase()
        .includes(query)
    );
  });
}

/* =========================================================
   SONG
========================================================= */

function songPage(id) {
  const song = getSong(id);

  if (!song) {
    return notFoundPage();
  }

  const book = getBook(song.bookId);

  const category = getCategory(song.categoryId);

  const index = songs.findIndex((item) => item.id === song.id);

  const previous = songs[index - 1] || null;

  const next = songs[index + 1] || null;

  const related = songs
    .filter(
      (item) =>
        item.id !== song.id &&
        (item.categoryId === song.categoryId || item.bookId === song.bookId),
    )
    .slice(0, 4);

  return `
        <div class="page-enter">

            <div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">

                ${breadcrumb("Songs", "#/songs", song.title)}

                <section
                    class="
                        mt-8
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                        dark:border-slate-800
                        dark:bg-slate-950
                        sm:p-8
                    "
                >

                    <div class="flex items-start justify-between gap-5">

                        <div>

                            <div class="flex flex-wrap gap-2">

                                <a
                                    href="#/category/${category?.id || ""}"
                                    class="
                                        rounded-full
                                        bg-emerald-50
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-emerald-700
                                        dark:bg-emerald-950
                                        dark:text-emerald-300
                                    "
                                >
                                    ${escapeHtml(
                                      category?.name || "Uncategorized",
                                    )}
                                </a>

                                <a
                                    href="#/book/${book?.id || ""}"
                                    class="
                                        rounded-full
                                        bg-slate-100
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        text-slate-600
                                        dark:bg-slate-800
                                        dark:text-slate-300
                                    "
                                >
                                    ${escapeHtml(book?.title || "Unknown book")}
                                </a>

                            </div>

                            <h1
                                class="
                                    mt-5
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    sm:text-4xl
                                "
                            >
                                ${escapeHtml(song.title)}
                            </h1>

                            <p
                                class="
                                    mt-2
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                ${escapeHtml(song.author)}
                            </p>

                        </div>

                        <div
                            class="
                                hidden
                                h-16
                                w-16
                                shrink-0
                                items-center
                                justify-center
                                rounded-2xl
                                bg-emerald-50
                                font-bold
                                text-emerald-600
                                dark:bg-emerald-950
                                sm:flex
                            "
                        >
                            ${toBangla4Digit(song.number)}
                        </div>

                    </div>

                    <div
                        class="
                            mt-8
                            grid
                            grid-cols-2
                            gap-4
                            border-t
                            border-slate-100
                            pt-6
                            dark:border-slate-800
                            sm:grid-cols-4
                        "
                    >

                        ${songMeta("Book", book?.title || "Unknown")}

                        ${songMeta(
                          "Category",
                          category?.name || "Uncategorized",
                        )}

                        ${songMeta("Language", song.language)}

                        ${songMeta("Song No.", toBangla4Digit(song.number))}

                    </div>

                </section>

                <!-- ACTIONS -->

                <div class="mt-5 flex flex-wrap gap-2">

                    <button
                        onclick="toggleFavorite(${song.id})"
                        class="action-button"
                    >

                        <span
                            class="${
                              isFavorite(song.id)
                                ? "text-emerald-600"
                                : "text-slate-400"
                            }"
                        >
                            ${icons.heart}
                        </span>

                        ${
                          isFavorite(song.id)
                            ? "Remove Favorite"
                            : "Add Favorite"
                        }

                    </button>

                    <button
                        onclick="changeFontSize()"
                        class="action-button"
                    >
                        A+ Text Size
                    </button>

                    <button
                        onclick="copySong(${song.id})"
                        class="action-button"
                    >
                        Copy Lyrics
                    </button>

                    <button
                        onclick="window.print()"
                        class="action-button"
                    >
                        Print
                    </button>

                </div>

                <!-- LYRICS -->

                <article
                    class="
                        mt-5
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-6
                        py-8
                        shadow-sm
                        dark:border-slate-800
                        dark:bg-slate-950
                        sm:px-10
                        sm:py-12
                    "
                >

                    <div
                        id="lyrics"
                        class="
                            lyrics
                            mx-auto
                            max-w-2xl
                            text-slate-700
                            dark:text-slate-200
                        "
                        style="
                            font-size:${state.fontSize}px;
                            line-height:1.8;
                        "
                    >
                        ${escapeHtml(song.lyrics)}
                    </div>

                </article>

                <!-- PREVIOUS / NEXT -->

                <div class="mt-5 grid grid-cols-2 gap-3">

                    ${
                      previous
                        ? `
                                <a
                                    href="#/song/${previous.id}"
                                    class="
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        hover:border-emerald-300
                                        dark:border-slate-800
                                        dark:bg-slate-950
                                    "
                                >
                                    <span class="text-xs text-slate-400">
                                        Previous Song
                                    </span>

                                    <strong class="mt-1 block truncate">
                                        ${escapeHtml(previous.title)}
                                    </strong>
                                </a>
                            `
                        : "<div></div>"
                    }

                    ${
                      next
                        ? `
                                <a
                                    href="#/song/${next.id}"
                                    class="
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        text-right
                                        hover:border-emerald-300
                                        dark:border-slate-800
                                        dark:bg-slate-950
                                    "
                                >
                                    <span class="text-xs text-slate-400">
                                        Next Song
                                    </span>

                                    <strong class="mt-1 block truncate">
                                        ${escapeHtml(next.title)}
                                    </strong>
                                </a>
                            `
                        : "<div></div>"
                    }

                </div>

                ${
                  related.length
                    ? `
                            <section class="mt-12">

                                <h2 class="text-2xl font-bold">
                                    Related Songs
                                </h2>

                                <div
                                    class="
                                        mt-5
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white
                                        dark:border-slate-800
                                        dark:bg-slate-950
                                    "
                                >
                                    ${related.map(songCard).join("")}
                                </div>

                            </section>
                        `
                    : ""
                }

            </div>

        </div>
    `;
}

/* =========================================================
   FAVORITES
========================================================= */

function favoritesPage() {
  const favoriteSongs = songs.filter((song) =>
    state.favorites.includes(song.id),
  );

  return `
        <div class="page-enter">

            <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6">

                ${breadcrumb("Home", "#/", "Favorites")}

                <div class="mt-8">

                    <p
                        class="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-emerald-600
                        "
                    >
                        Your Collection
                    </p>

                    <h1 class="mt-2 text-4xl font-bold">
                        Favorite Songs
                    </h1>

                    <p
                        class="
                            mt-3
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        ${favoriteSongs.length}
                        favorite songs
                    </p>

                </div>

                <div
                    class="
                        mt-8
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        dark:border-slate-800
                        dark:bg-slate-950
                    "
                >

                    ${
                      favoriteSongs.length
                        ? favoriteSongs.map(songCard).join("")
                        : emptyState(
                            "You have not added any favorite songs yet.",
                          )
                    }

                </div>

            </div>

        </div>
    `;
}

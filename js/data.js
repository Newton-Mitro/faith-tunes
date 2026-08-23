let songs = [];
let books = [];
let categories = [];

/* =========================================================
   SONGS
========================================================= */

function loadSongs() {
  if (!db) {
    console.warn("Database is not initialized.");
    return [];
  }

  try {
    const result = db.exec(`
      SELECT
        id,
        song_book_id,
        category_id,
        number,
        title,
        author,
        language,
        lyrics
      FROM songs
      ORDER BY id ASC, number ASC
    `);

    if (!result.length || !result[0].values.length) {
      console.warn("No songs found.");
      return [];
    }

    return result[0].values.map((row) => ({
      id: Number(row[0]),
      bookId: Number(row[1]),
      categoryId: Number(row[2]),
      number: row[3] ?? "",
      title: row[4] ?? "",
      author: row[5] ?? "",
      language: row[6] ?? "",
      lyrics: row[7] ?? "",
    }));
  } catch (error) {
    console.error("Failed to load songs:", error);
    return [];
  }
}

/* =========================================================
   BOOKS
========================================================= */

function loadBooks() {
  if (!db) {
    console.warn("Database is not initialized.");
    return [];
  }

  try {
    const result = db.exec(`
      SELECT
        id,
        title,
        description,
        year
      FROM song_books
      ORDER BY id ASC
    `);

    if (!result.length || !result[0].values.length) {
      console.warn("No song books found.");
      return [];
    }

    return result[0].values.map((row) => ({
      id: Number(row[0]),
      title: row[1] ?? "",
      description: row[2] ?? "",
      year: row[3] ?? "",
    }));
  } catch (error) {
    console.error("Failed to load books:", error);
    return [];
  }
}

/* =========================================================
   CATEGORIES
========================================================= */

function loadCategories() {
  if (!db) {
    console.warn("Database is not initialized.");
    return [];
  }

  try {
    const result = db.exec(`
      SELECT
        id,
        name,
        description,
        icon
      FROM categories
      ORDER BY name ASC
    `);

    if (!result.length || !result[0].values.length) {
      console.warn("No categories found.");
      return [];
    }

    return result[0].values.map((row) => ({
      id: Number(row[0]),
      name: row[1] ?? "",
      description: row[2] ?? "",
      icon: row[3] ?? "🎵",
    }));
  } catch (error) {
    console.error("Failed to load categories:", error);
    return [];
  }
}

/* =========================================================
   LOAD EVERYTHING
========================================================= */

function loadApplicationData() {
  console.log("Loading application data...");

  books = loadBooks();
  categories = loadCategories();
  songs = loadSongs();

  console.log("================================");
  console.log("Faith Tunes Data");
  console.log("================================");

  console.log("Books:", books);
  console.log("Categories:", categories);
  console.log("Songs:", songs);

  console.log(
    `Loaded ${books.length} books, ` +
      `${categories.length} categories, ` +
      `${songs.length} songs.`,
  );

  console.log("================================");

  validateRelationships();
}

/* =========================================================
   GET BOOK
========================================================= */

function getBook(id) {
  return books.find((book) => book.id === Number(id));
}

/* =========================================================
   GET CATEGORY
========================================================= */

function getCategory(id) {
  return categories.find((category) => category.id === Number(id));
}

/* =========================================================
   GET SONG
========================================================= */

function getSong(id) {
  return songs.find((song) => song.id === Number(id));
}

/* =========================================================
   GET BOOK SONGS
========================================================= */

function getBookSongs(bookId) {
  return songs.filter((song) => song.bookId === Number(bookId));
}

/* =========================================================
   GET BOOK CATEGORIES
========================================================= */

/*
 * Categories are GLOBAL.
 *
 * Therefore, a category does not have bookId.
 *
 * A book's categories are determined by the songs
 * that use those categories.
 */

function getBookCategories(bookId) {
  const targetBookId = Number(bookId);

  const categoryIds = new Set(
    songs
      .filter((song) => song.bookId === targetBookId)
      .map((song) => song.categoryId),
  );

  return categories.filter((category) => categoryIds.has(category.id));
}

/* =========================================================
   GET CATEGORY SONGS
========================================================= */

function getCategorySongs(categoryId) {
  return songs.filter((song) => song.categoryId === Number(categoryId));
}

/* =========================================================
   GET SONGS BY BOOK + CATEGORY
========================================================= */

function getBookCategorySongs(bookId, categoryId) {
  const targetBookId = Number(bookId);
  const targetCategoryId = Number(categoryId);

  return songs.filter(
    (song) =>
      song.bookId === targetBookId && song.categoryId === targetCategoryId,
  );
}

/* =========================================================
   GET CATEGORY COUNT
========================================================= */

function getCategorySongCount(categoryId) {
  return songs.filter((song) => song.categoryId === Number(categoryId)).length;
}

/* =========================================================
   GET BOOK CATEGORY COUNT
========================================================= */

function getBookCategoryCount(bookId, categoryId) {
  return songs.filter(
    (song) =>
      song.bookId === Number(bookId) && song.categoryId === Number(categoryId),
  ).length;
}

/* =========================================================
   VALIDATE RELATIONSHIPS
========================================================= */

function validateRelationships() {
  let valid = true;

  /* -------------------------------------------------------
     Validate songs
  ------------------------------------------------------- */

  songs.forEach((song) => {
    const book = getBook(song.bookId);
    const category = getCategory(song.categoryId);

    /* -----------------------------------------------------
       Validate book
    ----------------------------------------------------- */

    if (!book) {
      console.error(
        `Invalid song ${song.id}: ` + `book ${song.bookId} does not exist.`,
      );

      valid = false;
    }

    /* -----------------------------------------------------
       Validate category
    ----------------------------------------------------- */

    if (!category) {
      console.error(
        `Invalid song ${song.id}: ` +
          `category ${song.categoryId} does not exist.`,
      );

      valid = false;
    }
  });

  /* -------------------------------------------------------
     Validate categories
  ------------------------------------------------------- */

  categories.forEach((category) => {
    const usedBySongs = songs.some((song) => song.categoryId === category.id);

    if (!usedBySongs) {
      console.warn(
        `Category ${category.id} (${category.name}) ` +
          `is not currently used by any song.`,
      );
    }
  });

  /* -------------------------------------------------------
     Validate duplicate song numbers within books
  ------------------------------------------------------- */

  const songNumbers = new Set();

  songs.forEach((song) => {
    if (!song.number) {
      return;
    }

    const key = `${song.bookId}:${song.number}`;

    if (songNumbers.has(key)) {
      console.error(
        `Duplicate song number "${song.number}" ` + `in book ${song.bookId}.`,
      );

      valid = false;
    }

    songNumbers.add(key);
  });

  /* -------------------------------------------------------
     Final result
  ------------------------------------------------------- */

  if (valid) {
    console.log("✓ All book/category/song relationships are valid.");
  } else {
    console.warn("⚠ Some database relationships are invalid.");
  }

  return valid;
}

/* =========================================================
   DEBUG
========================================================= */

function printDatabaseSummary() {
  console.log("================================");
  console.log("Faith Tunes Database Summary");
  console.log("================================");

  console.log(`Books: ${books.length}`);
  console.log(`Categories: ${categories.length}`);
  console.log(`Songs: ${songs.length}`);

  books.forEach((book) => {
    const bookSongs = getBookSongs(book.id);
    const bookCategories = getBookCategories(book.id);

    console.log("");
    console.log(`📖 ${book.title}`);
    console.log(`   Songs: ${bookSongs.length}`);
    console.log(`   Categories: ${bookCategories.length}`);
  });

  console.log("================================");
}

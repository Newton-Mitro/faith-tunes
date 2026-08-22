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
      ORDER BY song_book_id ASC, number ASC
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

      bookId: Number(row[1]),

      name: row[2] ?? "",

      description: row[3] ?? "",

      icon: row[4] ?? "🎵",
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
  console.log("Song Library Data");
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

function getBookCategories(bookId) {
  return categories.filter((category) => category.bookId === Number(bookId));
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
  return songs.filter(
    (song) =>
      song.bookId === Number(bookId) && song.categoryId === Number(categoryId),
  );
}

/* =========================================================
   VALIDATE RELATIONSHIPS
========================================================= */

function validateRelationships() {
  let valid = true;

  /* -------------------------------------------------------
     Validate categories
  ------------------------------------------------------- */

  categories.forEach((category) => {
    const book = getBook(category.bookId);

    if (!book) {
      console.error(
        `Invalid category ${category.id}: ` +
          `book ${category.bookId} does not exist.`,
      );

      valid = false;
    }
  });

  /* -------------------------------------------------------
     Validate songs
  ------------------------------------------------------- */

  songs.forEach((song) => {
    const book = getBook(song.bookId);

    const category = getCategory(song.categoryId);

    if (!book) {
      console.error(
        `Invalid song ${song.id}: ` + `book ${song.bookId} does not exist.`,
      );

      valid = false;
    }

    if (!category) {
      console.error(
        `Invalid song ${song.id}: ` +
          `category ${song.categoryId} does not exist.`,
      );

      valid = false;
    }

    /*
     * A song's category must belong to
     * the same song book.
     */
    if (category && book && category.bookId !== book.id) {
      console.error(
        `Invalid relationship for song ${song.id}: ` +
          `category ${category.id} belongs to book ` +
          `${category.bookId}, but song belongs to book ` +
          `${song.bookId}.`,
      );

      valid = false;
    }
  });

  if (valid) {
    console.log("✓ All book/category/song relationships are valid.");
  } else {
    console.warn("⚠ Some database relationships are invalid.");
  }

  return valid;
}

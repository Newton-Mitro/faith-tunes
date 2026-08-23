const initSqlJs = require("sql.js");
const fs = require("fs");
const path = require("path");

const songBooks = require("./seeders/song-books");
const categories = require("./seeders/categories");
const songs = require("./seeders/songs");

async function createDatabase() {
  console.log("Creating SQLite database...");

  let db;

  try {
    /* =========================================================
       INITIALIZE SQLITE
    ========================================================= */

    const SQL = await initSqlJs();

    db = new SQL.Database();

    /* =========================================================
       LOAD MIGRATION
    ========================================================= */

    const migrationPath = path.join(
      __dirname,
      "migrations",
      "001_create_song_library.sql",
    );

    if (!fs.existsSync(migrationPath)) {
      throw new Error(`Migration file not found: ${migrationPath}`);
    }

    const migration = fs.readFileSync(migrationPath, "utf8");

    db.run("PRAGMA foreign_keys = ON;");

    db.run(migration);

    console.log("✓ Migration completed");

    /* =========================================================
       PREPARE QUERIES
    ========================================================= */

    const insertSongBook = db.prepare(`
      INSERT INTO song_books (
        id,
        title,
        description,
        year
      )
      VALUES (?, ?, ?, ?)
    `);

    const insertCategory = db.prepare(`
      INSERT INTO categories (
        id,
        name,
        description,
        icon
      )
      VALUES (?, ?, ?, ?)
    `);

    const insertSong = db.prepare(`
      INSERT INTO songs (
        id,
        song_book_id,
        category_id,
        number,
        title,
        author,
        tune,
        language,
        lyrics
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    /* =========================================================
       BEGIN TRANSACTION
    ========================================================= */

    db.run("BEGIN TRANSACTION;");

    /* =========================================================
       INSERT SONG BOOKS
    ========================================================= */

    for (const book of songBooks) {
      insertSongBook.run([book.id, book.title, book.description, book.year]);
    }

    console.log(`✓ ${songBooks.length} song books seeded`);

    /* =========================================================
       INSERT CATEGORIES
    ========================================================= */

    for (const category of categories) {
      const values = [
        category.id,
        category.name,
        category.description,
        category.icon,
      ];

      console.log("Seeding category:", category);

      const undefinedFields = values
        .map((value, index) => (value === undefined ? index : null))
        .filter((index) => index !== null);

      if (undefinedFields.length > 0) {
        throw new Error(
          `Invalid category data: ${JSON.stringify(category)}. ` +
            `Undefined fields at indexes: ${undefinedFields.join(", ")}`,
        );
      }

      insertCategory.run(values);
    }

    console.log(`✓ ${categories.length} categories seeded`);

    /* =========================================================
       INSERT SONGS
    ========================================================= */

    for (const song of songs) {
      insertSong.run([
        song.id,
        song.songBookId,
        song.categoryId,
        song.number,
        song.title,
        song.author,
        song.tune,
        song.language,
        song.lyrics,
      ]);
    }

    console.log(`✓ ${songs.length} songs seeded`);

    /* =========================================================
       COMMIT TRANSACTION
    ========================================================= */

    db.run("COMMIT;");

    /* =========================================================
       CLOSE STATEMENTS
    ========================================================= */

    insertSongBook.free();
    insertCategory.free();
    insertSong.free();

    /* =========================================================
       VALIDATE DATABASE
    ========================================================= */

    const bookResult = db.exec(`
      SELECT COUNT(*) AS count
      FROM song_books
    `);

    const categoryResult = db.exec(`
      SELECT COUNT(*) AS count
      FROM categories
    `);

    const songResult = db.exec(`
      SELECT COUNT(*) AS count
      FROM songs
    `);

    const bookCount =
      bookResult.length > 0 ? Number(bookResult[0].values[0][0]) : 0;

    const categoryCount =
      categoryResult.length > 0 ? Number(categoryResult[0].values[0][0]) : 0;

    const songCount =
      songResult.length > 0 ? Number(songResult[0].values[0][0]) : 0;

    console.log("");
    console.log("Database Summary:");
    console.log(`Books: ${bookCount}`);
    console.log(`Categories: ${categoryCount}`);
    console.log(`Songs: ${songCount}`);

    /* =========================================================
       EXPORT DATABASE
    ========================================================= */

    const data = db.export();

    const outputPath = path.resolve(__dirname, "songs.sqlite");

    console.log("");
    console.log("Exporting SQLite database...");
    console.log("Output path:", outputPath);

    fs.writeFileSync(outputPath, Buffer.from(data));

    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);

      console.log("✓ SQLite database created");
      console.log("✓ File:", outputPath);
      console.log("✓ Size:", stats.size, "bytes");
    } else {
      throw new Error(`SQLite database was not created: ${outputPath}`);
    }

    /* =========================================================
       CLOSE DATABASE
    ========================================================= */

    db.close();
  } catch (error) {
    /* =========================================================
       ROLLBACK ON ERROR
    ========================================================= */

    try {
      if (db) {
        db.run("ROLLBACK;");
      }
    } catch (_) {
      // Ignore rollback errors
    }

    if (db) {
      db.close();
    }

    throw error;
  }
}

createDatabase().catch((error) => {
  console.error("");
  console.error("Database creation failed:");
  console.error(error);

  process.exit(1);
});

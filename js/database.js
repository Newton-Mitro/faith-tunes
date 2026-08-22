let db = null;

async function initDatabase() {
  try {
    const SQL = await initSqlJs({
      locateFile: (file) =>
        `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${file}`,
    });

    const response = await fetch("./db/songs.sqlite");

    if (!response.ok) {
      throw new Error(
        `Unable to load database: ${response.status} ${response.statusText}`,
      );
    }

    const buffer = await response.arrayBuffer();

    db = new SQL.Database(new Uint8Array(buffer));

    console.log("SQLite database loaded successfully.");

    return db;
  } catch (error) {
    console.error("Database initialization failed:", error);

    throw error;
  }
}

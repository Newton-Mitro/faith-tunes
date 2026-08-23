PRAGMA foreign_keys = ON;

BEGIN TRANSACTION;

-- =========================================================
-- SONG BOOKS
-- =========================================================

CREATE TABLE IF NOT EXISTS song_books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    title TEXT NOT NULL,

    description TEXT,

    year INTEGER,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- CATEGORIES
-- =========================================================

CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    name TEXT NOT NULL,

    description TEXT,

    icon TEXT DEFAULT '🎵',

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- SONGS
-- =========================================================

CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    song_book_id INTEGER NOT NULL,

    category_id INTEGER NOT NULL,

    number TEXT,

    title TEXT NOT NULL,

    author TEXT,

    tune TEXT,

    language TEXT DEFAULT 'English',

    lyrics TEXT NOT NULL,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (song_book_id)
        REFERENCES song_books(id)
        ON DELETE CASCADE,

    FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE RESTRICT,

    UNIQUE (song_book_id, number)
);

-- =========================================================
-- INDEXES
-- =========================================================

CREATE INDEX IF NOT EXISTS idx_categories_name
ON categories(name);

CREATE INDEX IF NOT EXISTS idx_songs_song_book_id
ON songs(song_book_id);

CREATE INDEX IF NOT EXISTS idx_songs_category_id
ON songs(category_id);

CREATE INDEX IF NOT EXISTS idx_songs_title
ON songs(title);

COMMIT;
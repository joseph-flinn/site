-- Migration number: 0000 	 2023-08-26T21:39:45.337Z

CREATE TABLE IF NOT EXISTS eddm_migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO eddm_migrations (name) values ('0000_init_migrator.sql');

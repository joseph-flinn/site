-- Migration number: 0001 	 2023-08-26T21:49:40.373Z


CREATE TABLE IF NOT EXISTS drips (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT NOT NULL,
    tags JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);



-- DO NOT REMOVE --
INSERT INTO eddm_migrations (name) values ('0001_create_drips.sql');

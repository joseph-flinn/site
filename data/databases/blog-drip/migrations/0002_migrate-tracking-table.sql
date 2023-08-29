-- Migration number: 0002 	 2023-08-29T13:10:48.541Z


CREATE TABLE IF NOT EXISTS edda_migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    is_transition BOOLEAN DEFAULT FALSE NOT NULL,
    in_transition_state BOOLEAN DEFAULT FALSE NOT NULL,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO edda_migrations (id, name, applied_at)
SELECT id, name, applied_at from eddm_migrations;


-- DO NOT REMOVE --
INSERT INTO edda_migrations (name) values ('0002_migrate-tracking-table.sql');

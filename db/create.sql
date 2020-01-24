CREATE TABLE recipies (
	recipies_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    source TEXT,
    ingredients JSON NOT NULL,
    instructions JSON NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    modified_at TIMESTAMP NOT NULL DEFAULT now()
);

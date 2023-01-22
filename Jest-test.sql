CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "email" varchar(100) UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "created at" timestamptz DEFAULT (now())
);

CREATE INDEX ON "users" ("email");

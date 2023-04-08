CREATE TABLE "person" (
  "id" integer,
  "prefix" string,
  "fname" string,
  "mname" string,
  "lname" string,
  "suffix" string,
  "birthday" date,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "car" (
  "id" integer PRIMARY KEY,
  "make" string,
  "model" string,
  "year" integer,
  "color" string,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "house" (
  "id" integer PRIMARY KEY,
  "county" string,
  "plot_area" integer,
  "floor_area" integer,
  "stories" integer,
  "bedrooms" integer,
  "bathrooms" float,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "deed" (
  "id" integer,
  "person_id" integer,
  "house_id" integer
);

CREATE TABLE "pink_slip" (
  "id" integer,
  "person_id" integer,
  "car_id" integer
);

ALTER TABLE "deed" ADD FOREIGN KEY ("person_id") REFERENCES "person" ("id");

ALTER TABLE "deed" ADD FOREIGN KEY ("house_id") REFERENCES "house" ("id");

ALTER TABLE "pink_slip" ADD FOREIGN KEY ("person_id") REFERENCES "person" ("id");

ALTER TABLE "pink_slip" ADD FOREIGN KEY ("car_id") REFERENCES "car" ("id");

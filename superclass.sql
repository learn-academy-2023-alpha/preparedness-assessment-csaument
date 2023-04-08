Table person {
  id integer
  prefix string
  fname string
  mname string
  lname string
  suffix string
  birthday date
  created_at timestamp
  updated_at timestamp
}

Table car {
  id integer [pk]
  make string
  model string
  year integer
  color string
  property_id integer [ref: > property.id]
  created_at timestamp
  updated_at timestamp
}

Table house {
  id integer [pk]
  county string
  plot_area integer
  floor_area integer
  stories integer
  bedrooms integer
  bathrooms float
  property_id integer [ref: > property.id]
  created_at timestamp
  updated_at timestamp
}

Table property {
  id integer
  person_id integer [ref: > person.id]
}
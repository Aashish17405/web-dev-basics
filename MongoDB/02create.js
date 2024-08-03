db.movies.insertOne(
  {
    title: "The Favourite",
    genres: [ "Drama", "History" ],
    runtime: 121,
    rated: "R",
    year: 2018,
    directors: [ "Yorgos Lanthimos" ],
    cast: [ "Olivia Colman", "Emma Stone", "Rachel Weisz" ],
    type: "movie"
  }
)

db.inventory.insertMany(
    [{
      title: "The Favourite",
      genres: [ "Drama", "History" ],
      year: 2018,
      type: "movie"
    },
    {
        title: "The ironman",
        genres: [ "History" ],
        year: 2020,
        type: "movie"
      }]
  )
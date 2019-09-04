export default function(genre) {
  return fetch(
    `https://api.themoviedb.org/3/genre/${genre}/movies?api_key=2889a6790aedc1fbd33a23d1fdf6a3b9&language=en-US&include_adult=false&sort_by=created_at.asc`
  )
    .then(res => res.json())
    .then(res => res.results.map(result => result.title));
}

// export default function(genre) {
//   return fetch(
//     `https://api.themoviedb.org/3/genre/${genre}/movies?api_key=2889a6790aedc1fbd33a23d1fdf6a3b9&language=en-US&include_adult=false&sort_by=created_at.asc`
//   )
//     .then(res => res.json())
//     .then(res => res.results.map(result => result.title));

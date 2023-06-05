var Movie = /** @class */ (function () {
  function Movie(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
  }
  return Movie;
})();
var movies = [
  new Movie(
    'The Shawshank ',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-'
  ),
  new Movie(
    'The Godfather',
    'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  ),
  new Movie(
    'The Dark Knight',
    'https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg'
  ),
  new Movie(
    'Pulp Fiction',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTViAjqYaPH8rSNheAqd11PhVY9p7Ty7BrlSzmXfk5rBD3w8q3m'
  ),
];
var container = document.querySelector('#movie-container');
movies.forEach(function (movie) {
  var movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  var titleElement = document.createElement('h2');
  titleElement.textContent = movie.name;
  movieElement.appendChild(titleElement);
  var imgElement = document.createElement('img');
  imgElement.src = movie.imgSrc;
  movieElement.appendChild(imgElement);
  container.appendChild(movieElement);
});

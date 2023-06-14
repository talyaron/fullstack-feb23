var Movie = /** @class */ (function () {
    function Movie(name, imgSrc) {
        this.name = name;
        this.imgSrc = imgSrc;
    }
    return Movie;
}());
var movies = [
    new Movie('The Shawshank Redemption', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-'),
    new Movie('The Godfather', 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'),
    new Movie('The Dark Knight', 'https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg'),
    new Movie('Pulp Fiction', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTViAjqYaPH8rSNheAqd11PhVY9p7Ty7BrlSzmXfk5rBD3w8q3m'),
];
var container = document.querySelector('#movie-container');
<<<<<<< HEAD
// function renderMovies(movies: Movie[]) {
//   let html = '';
//   movies.forEach((movie) => {
//     html += `
//       <div class="movie">
//         <img src="${movie.imgSrc}" alt="${movie.name}">
//         <h2>${movie.name}</h2>
//       </div>`;
//   });
//   console.log(html);
//   if (container) {
//     container.innerHTML = html;
//   }
//   // container.innerHTML = '';
//   // movies.forEach((movie) => {
//   //   container.innerHTML += `
//   //     <div class="movie">
//   //       <img src="${movie.imgSrc}" alt="${movie.name}">
//   //       <h2>${movie.name}</h2>
//   //     </div>
//   //   `;
//   // });
// }
// renderMovies(movies);
var renderToClient = function () {
    var pElement = document.createElement('p');
    pElement.textContent = 'Hello World!';
    var infoEl = document.createElement('h1');
    infoEl.textContent = 'I Love movies';
    if (container) {
        container.appendChild(pElement);
        container.appendChild(infoEl);
    }
};
renderToClient();
=======
function renderMovies(movies) {
    var html = '';
    movies.forEach(function (movie) {
        html += "\n      <div class=\"movie\">\n        <img src=\"" + movie.imgSrc + "\" alt=\"" + movie.name + "\">\n        <h2>" + movie.name + "</h2>\n      </div>";
    });
    console.log(html);
    if (container) {
        container.innerHTML = html;
    }
    // container.innerHTML = '';
    // movies.forEach((movie) => {
    //   container.innerHTML += `
    //     <div class="movie">
    //       <img src="${movie.imgSrc}" alt="${movie.name}">
    //       <h2>${movie.name}</h2>
    //     </div>
    //   `;
    // });
}
// renderMovies(movies);
// const renderToClient = () => {
//   const pElement = document.createElement('p');
//   pElement.textContent = 'Hello World!';
//   const infoEl = document.createElement('h1');
//   infoEl.textContent = 'I Love movies';
//   if (container) {
//     container.appendChild(pElement);
//     container.appendChild(infoEl);
//   }
// };
// renderToClient();
>>>>>>> c8162fa75b2aa45c9a651d439fa2136ed0663ec0

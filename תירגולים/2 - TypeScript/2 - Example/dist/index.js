/*
Create an array called "matrix" with three sub-arrays, each containing four numbers.
Write a function that takes the "matrix" array as input and
returns the sum of all the numbers in the matrix.
*/
// --- Katya --- //
// const matrix = [
//     [7, 5, 3, 6],
//     [1, 2, 3, 4],
//     [7, 8, 9, 2]
// ]
// const sumAll = (arr) => {
//     return arr.flat().reduce((a, b) => a + b, 0)
// }
// console.log(sumAll(matrix))
// --- Yuval --- //
// let matrix: any[] = [[5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3, 3]]
// const a = matrix[0]
// const b = matrix[1]
// const result = 0
// matrix = matrix.flat().reduce((a, b) => a + b, result)
// console.log(matrix)
// --- TO TAMAR --- //
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
var root = document.querySelector("#root");
var render = function (movie) {
    if (root) {
        root.innerHTML = "\n        <div>\n            <img src='" + movie.imgSrc + "'/>\n        </div>";
    }
};

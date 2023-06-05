class Movie {
  name: string;
  imgSrc: string;

  constructor(name: string, imgSrc: string) {
    this.name = name;
    this.imgSrc = imgSrc;
  }
}

let movies: Movie[] = [
  new Movie(
    'The Shawshank Redemption',
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

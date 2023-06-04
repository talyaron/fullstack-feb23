// 2. print every item in a given array

class Item {
    name: string;
    age: number;
    constructor(
        name: string,
        age: number,
    ) {
        this.name = name;
        this.age = age;
    }
}

const gal = new Item("Gal", 22);
const gay = new Item("Gay", 12);

const items: Array<any> = [gal, gay, "b", 1]

items.forEach(function (Item) {
    console.log(Item)
})

// 3. print every odd item in a given array
// debugger
for (let i = 0; i < items.length; i++) {
    if (i % 2) {
        console.log(items[i])
    }
}


// levle 1

//Define the class of movies, which will have the name of the movie,
// the year of release, and rank (with a score from 1 to 5)
//Create an array of movies
//Print all movies in the array, one after the other.
//Print only movies which were released after 2010
//Print only movies with a score of more than 3

class Movie {
    name: string;
    yearOfRelease: number;
    rank: number;
    constructor(
        name: string,
        yearOfRelease: number,
        rank: number,) {
        this.name = name;
        this.yearOfRelease = yearOfRelease;
        this.rank = rank;
    }
}

const titanic = new Movie("Titanic", 1997, 5)
const TheFastAndTheFurious = new Movie("The Fast and the Furious", 2001, 3)
const RedNotice = new Movie("Red Notice", 2021, 2)
const DirtyDancing = new Movie("Dirty Dancing", 1987, 4)

const movies: Array<any> = [titanic, TheFastAndTheFurious, RedNotice, DirtyDancing]

// movies.forEach(function (Movie) {
//     console.log(Movie)
// })

function moviesReleasedAfter2010(movies, a: number) {
    a = 2010
    for (let i = 0; i < movies.length; i++) {
        if (movies.yearOfRelease[i] > a) {
           return  movies.yearOfRelease[i]
        }
    }
    // return a
}
// console.log(moviesReleasedAfter2010(movies, a).yearOfRelease)

//level 2
//Create a function that gets an array of movies and returns the top score movie.

//level 3
//Create a function that gets an array of movies and returns the average score of movies
// use the same function, but add another parameter: the year of publication. this function will return the
// average of films from that year and onward
// define array of students 

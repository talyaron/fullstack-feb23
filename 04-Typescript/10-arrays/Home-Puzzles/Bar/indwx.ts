// 2. print every item in a given array

// class Item {
//     name: string;
//     age: number;
//     constructor(
//         name: string,
//         age: number,
//     ) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const gal = new Item("Gal", 22);
// const gay = new Item("Gay", 12);

// const items: Array<any> = [gal, gay, "b", 1]

// items.forEach(function (Item) {
//     console.log(Item)
// })

// 3. print every odd item in a given array

// for (let i = 0; i < items.length; i++) {
//     if (i % 2) {
//         console.log(items[i])
//     }
// }


// levle 1

//Define the class of movies, which will have the name of the movie,
// the year of release, and score (with a score from 1 to 5)
//Create an array of movies
//Print all movies in the array, one after the other.

class Movie {
    name: string;
    yearOfRelease: number;
    score: number;
    constructor(
        name: string,
        yearOfRelease: number,
        score: number,) {
        this.name = name;
        this.yearOfRelease = yearOfRelease;
        this.score = score;
    }
}

const TheFastAndTheFurious = new Movie("The Fast and the Furious", 2001, 3)
const titanic = new Movie("Titanic", 1997, 5)
const RedNotice = new Movie("Red Notice", 2021, 2)
const DirtyDancing = new Movie("Dirty Dancing", 1987, 4)

const movies: Array<any> = [RedNotice, TheFastAndTheFurious, titanic, DirtyDancing]

//Print only movies which were released after 2010.
function moviesAfter2010(movies) {
    try {
        let moviesAfter2010 = movies[0]
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].yearOfRelease > 2010) {
                moviesAfter2010 = movies[i]
            }
        }
        return moviesAfter2010
    } catch (error) {
        console.error(error)
        return undefined
    }
}
console.log("The movie which were released after 2010 is", moviesAfter2010(movies)?.name)


// Print only movies with a score of more than 3.
function scoreMoreThan3(movies) {
    try {
        let scoreMoreThan3 = movies[0]
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].score > 3) {
                scoreMoreThan3 = movies[i]
            }
        }
        return scoreMoreThan3
    } catch (error) {
        console.error(error)
        return undefined
    }
}
console.log("The movies with a score of more than 3 is", scoreMoreThan3(movies)?.name)


//level 2
//Create a function that gets an array of movies and returns the top score movie.

function topScore(movies){
    try {
        let topScore = movies[0]
        for(let i =0; i < movies.length; i++){
          if(topScore.score < movies[i].score){
            topScore = movies[i]
          }
        }
        return topScore
    } catch (error) {
        console.error(error)
        return undefined
    }
}
console.log(topScore(movies).name)

//level 3
//Create a function that gets an array of movies and returns the average score of movies
// use the same function, but add another parameter: the year of publication. this function will return the
// average of films from that year and onward
// define array of students 

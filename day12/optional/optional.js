//
const movie = {
    name: "오펜하이머",
    detail: {
        price : "50000",
        date : "20240920"
    }
}

const movie2 = {
    name: "마블",
    detail : {
        price : "10000"
    }
}

function printMoviePrice(movie){
    console.log(movie.detail.price)

}

printMoviePrice(movie)
printMoviePrice(movie2)

function printMovieDate(movie){
    return movie?.detail?.date;
}

console.log(printMovieDate(movie))
console.log(printMovieDate(movie2))

console.log(movie2?.detail?.date);
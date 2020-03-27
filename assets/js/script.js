const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const imgURL = "https://image.tmdb.org/t/p/w185/";

const searchButton = document.getElementById("pickflickBtn");
// const searchMovie = document.getElementById("searchMovie");

const url = "http://api.themoviedb.org/3/";


// Render to html
function pickaflickContainer(randomMovie){
    let movieElement = document.getElementById("randomMovieResult");
    let movieTitle = randomMovie.title;
    let movieRating = randomMovie.vote_average;
    let movieOverview = randomMovie.overview;
    // let movieGenre = randomMovie.genre_ids;

    pickflickaContent = 
    `<div class="container">
            <div class="row">
                <div class="col">
                    <div class="media">
                        <img class="mr-3 align-self-start" src="${imgURL + randomMovie.poster_path}">
                        <div class="media-body movie-info">
                            <h5 class="movie-title">${movieTitle}</h5>
                            <p class="movie-rating">IMDB Rating: ${movieRating}</p>
                            <p class="movie-rating">${movieOverview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
            movieElement.innerHTML = "";
            movieElement.innerHTML = pickflickaContent;
    return movieElement;
}


$(searchButton).click(function () {
    // Get random number for page number between 1 and 10,000
    function pageNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var page = pageNumber(1, 500);
        console.log(page);
    let randomURL = url + "discover/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US&page=" + page;

    fetch(randomURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let movies = data.results;
        let actionMovies = data.results.filter(function(movies){
                return movies.genre_ids.includes(28);
            })
        let comedyMovies = data.results.filter(function(movies){
                return movies.genre_ids.includes(35);
            })
        let dramaMovies = data.results.filter(function(movies){
                return movies.genre_ids.includes(18);
            })
        
        // Taget the genre dropdown and filter by genre id in the API 
        if (document.getElementById("genre").value == "Action") {
             randomMovie = actionMovies[Math.floor(Math.random() * actionMovies.length)];
        }
        else if (document.getElementById("genre").value == "Comedy") {
            randomMovie = comedyMovies[Math.floor(Math.random() * comedyMovies.length)];
        }
        else if (document.getElementById("genre").value == "Drama") {
            randomMovie = dramaMovies[Math.floor(Math.random() * dramaMovies.length)];
        }
        else{
            randomMovie = movies[Math.floor(Math.random() * movies.length)];
        }
        
        console.log("randomMovie", randomMovie);
        pickaflickContainer(randomMovie);
        // alert (randomMovie.genre_ids);
    })
    .catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
})

// function randomMovieGenre(randomMovie){
//     if (document.getElementById("genre").value == "Action") {
//         data.results.filter(function(movies){
//             return movies.genre_ids.includes(28);
//         })
//     }
// }
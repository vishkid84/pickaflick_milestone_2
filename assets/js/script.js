const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const imgURL = "https://image.tmdb.org/t/p/w185/"

const searchButton = document.getElementById("pickflickBtn");
// const searchMovie = document.getElementById("searchMovie");

const url = "http://api.themoviedb.org/3/";

// function randomMovieGenre(randomMovie){
    
// }

function pickaflickContainer(randomMovie){
    let movieElement = document.getElementById("randomMovieResult");
    let movieTitle = randomMovie.title;
    let movieRating = randomMovie.vote_average;
    let movieOverview = randomMovie.overview;
    let movieGenre = randomMovie.genre_ids;
        
        // if (document.getElementById("genre").value == "Action"){
        //     movieGenre.map(function (genre){
        //         let newGenre = genre === 18;
        //         alert (newGenre);
        //         randomMovie = randomMovie.newGenre;
        //     })
        // };

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
    // const value = inputValue.value;
    let randomURL = url + "discover/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US";

    fetch(randomURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let movies = data.results;
        let randomMovie = movies[Math.floor(Math.random() * movies.length)];
        console.log("randomMovie", randomMovie);
            pickaflickContainer(randomMovie);
    })
    .catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
})
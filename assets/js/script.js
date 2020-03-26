const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const imgURL = "https://image.tmdb.org/t/p/w185/"

const searchButton = document.getElementById("pickflickBtn");
// const searchMovie = document.getElementById("searchMovie");

const url = "http://api.themoviedb.org/3/";

// function pickaflickContainer{

// }


$(searchButton).click(function () {
    // const value = inputValue.value;
    let randomURL = url + "discover/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US";

    fetch(randomURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let movies = data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        var imgSource = imgURL + randomMovie.poster_path;
        let el = document.getElementById("randomMovieResult");
            el.innerHTML = "";
            el.innerHTML = `<div class="container">
            <div class="row">
                <div class="col">
                    <div class="media">
                        <img class="mr-3 align-self-start" src="${imgSource}">
                        <div class="media-body movie-info">
                            <h5 class="movie-title">${randomMovie.title}</h5>
                            <p class="movie-rating">IMDB Rating: ${randomMovie.vote_average}</p>
                            <p class="movie-rating">${randomMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        console.log("randomMovie", randomMovie);
    })
    .catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
})
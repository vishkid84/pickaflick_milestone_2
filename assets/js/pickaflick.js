const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const imgURL = "https://image.tmdb.org/t/p/w185";

const pickflickButton = document.getElementById("pickflickBtn");


const url = "http://api.themoviedb.org/3/";

// -----------Pick a flick page------------------

// Render to html
function pickaflickContainer(randomMovie) {
    let movieElement = document.getElementById("randomMovieResult");
    let movieTitle = randomMovie.title;
    let movieRating = randomMovie.vote_average;
    let movieReleaseDate = randomMovie.release_date;
    let movieOverview = randomMovie.overview;

    let pickflickaContent =
        `<div class="container">
            <div class="row">
                <div class="col">
                    <div class="media">
                        <img class="mr-3 align-self-start randomMovie-poster" src="${imgURL + randomMovie.poster_path}">
                        <div class="media-body movie-info">
                            <h5 class="movie-title">${movieTitle}</h5>
                            <p class="movie-date">Release Date: ${movieReleaseDate}</p>
                            <p class="movie-rating">IMDB Rating: ${movieRating}</p>
                            <p class="movie-overview">${movieOverview}</p>
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


$(pickflickButton).click(function() {
    // Get random number for page number between 1 and 10,000
    function pageNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var page = pageNumber(1, 500);

    let randomURL = url + "discover/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US&page=" + page;

    fetch(randomURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let randomMovie = genrePicker(data);

            // Return error message to try again if no movie found 
            if (randomMovie === undefined) {
                let errorElement = document.getElementById("randomMovieResult");
                let errorElementTemplate =
                    `<div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 class="randomMovieError">Oops, seems like I tripped. Please try again.</h5>
                            </div>
                        </div>
                </div>`;
                errorElement.innerHTML = "";
                errorElement.innerHTML = errorElementTemplate;
            }

            pickaflickContainer(randomMovie);

        })
        .catch(function(error) {
            console.error("Something has gone wrong");
            console.error(error);
        });
});


function genrePicker(data, randomMovie) {
    // Filter to return movies with rating of more than 5.5
    let range = {
        min: 5.5,
        max: 10
    };
    data.results = data.results.filter(function(movies) {
        return movies.vote_average <= range.max && movies.vote_average >= range.min;
    });

    // Variable to filter movies by genre using genre_ids
    let flicks = data.results;
    let actionflicks = flicks.filter(function(movies) {
        return movies.genre_ids.includes(28);
    });
    let comedyflicks = flicks.filter(function(movies) {
        return movies.genre_ids.includes(35);
    });
    let dramaflicks = flicks.filter(function(movies) {
        return movies.genre_ids.includes(18);
    });
    let horrorflicks = flicks.filter(function(movies) {
        return movies.genre_ids.includes(27);
    });
    let scififlicks = flicks.filter(function(movies) {
        return movies.genre_ids.includes(878);
    });
    let thrillerflicks = flicks.filter(function(movies) {
        return movies.genre_ids.includes(53);
    });

    // Taget the genre dropdown to return random movie depending on the the genre selected
    if (document.getElementById("genre").value == "Action") {
        randomMovie = actionflicks[Math.floor(Math.random() * actionflicks.length)];
    } else if (document.getElementById("genre").value == "Comedy") {
        randomMovie = comedyflicks[Math.floor(Math.random() * comedyflicks.length)];
    } else if (document.getElementById("genre").value == "Drama") {
        randomMovie = dramaflicks[Math.floor(Math.random() * dramaflicks.length)];
    } else if (document.getElementById("genre").value == "Horror") {
        randomMovie = horrorflicks[Math.floor(Math.random() * horrorflicks.length)];
    } else if (document.getElementById("genre").value == "SciFi") {
        randomMovie = scififlicks[Math.floor(Math.random() * scififlicks.length)];
    } else if (document.getElementById("genre").value == "Thriller") {
        randomMovie = thrillerflicks[Math.floor(Math.random() * thrillerflicks.length)];
    } else {
        randomMovie = flicks[Math.floor(Math.random() * flicks.length)];
    }
    return randomMovie;
}

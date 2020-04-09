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
    // let movieGenre = randomMovie.genre_ids;

    pickflickaContent =
        `<div class="container">
            <div class="row">
                <div class="col">
                    <div class="media">
                        <img class="mr-3 align-self-start" src="${imgURL + randomMovie.poster_path}">
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


$(pickflickButton).click(function () {
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


            genrePicker(data);
            if (randomMovie === undefined) {
                let errorElement = document.getElementById("randomMovieResult");
                errorElementTemplate =
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

            console.log("randomMovie", randomMovie);

            pickaflickContainer(randomMovie);
            // console.log(randomMovie.genre_ids);
            // console.log(randomMovie.vote_average);
        })
        .catch(function (error) {
            console.error("Something has gone wrong");
            console.error(error);

        })
})


function genrePicker(data) {
    let range = { min: 5.5, max: 10 }
    data.results = data.results.filter(function (movies) {
        return movies.vote_average <= range.max && movies.vote_average >= range.min;
    })
    let flicks = data.results;
    let actionflicks = data.results.filter(function (movies) {
        return movies.genre_ids.includes(28);
    })
    let comedyflicks = data.results.filter(function (movies) {
        return movies.genre_ids.includes(35);
    })
    let dramaflicks = data.results.filter(function (movies) {
        return movies.genre_ids.includes(18);
    })
    let horrorflicks = data.results.filter(function (movies) {
        return movies.genre_ids.includes(27);
    })
    let scififlicks = data.results.filter(function (movies) {
        return movies.genre_ids.includes(878);
    })
    let thrillerflicks = data.results.filter(function (movies) {
        return movies.genre_ids.includes(53);
    })

    // Taget the genre dropdown and filter by genre id in the API 
    if (document.getElementById("genre").value == "Action") {
        randomMovie = actionflicks[Math.floor(Math.random() * actionflicks.length)];
    }
    else if (document.getElementById("genre").value == "Comedy") {
        randomMovie = comedyflicks[Math.floor(Math.random() * comedyflicks.length)];
    }
    else if (document.getElementById("genre").value == "Drama") {
        randomMovie = dramaflicks[Math.floor(Math.random() * dramaflicks.length)];
    }
    else if (document.getElementById("genre").value == "Horror") {
        randomMovie = horrorflicks[Math.floor(Math.random() * horrorflicks.length)];
    }
    else if (document.getElementById("genre").value == "SciFi") {
        randomMovie = scififlicks[Math.floor(Math.random() * scififlicks.length)];
    }
    else if (document.getElementById("genre").value == "Thriller") {
        randomMovie = thrillerflicks[Math.floor(Math.random() * thrillerflicks.length)];
    }
    else {
        randomMovie = flicks[Math.floor(Math.random() * flicks.length)];
    }
}


function backgroundChange() {
    if (document.getElementById("genre").value == "anyGenre") {
        $("body").css("background-color", "#e7e7eb");
    }
    if (document.getElementById("genre").value == "Action") {
        $("body").css("background-color", "#bfcee1");
    }
    else if (document.getElementById("genre").value == "Comedy") {
        $("body").css("background-color", "#ffffba");
    }
    else if (document.getElementById("genre").value == "Drama") {
        $("body").css("background-color", "#ff9aa2");
    }
    else if (document.getElementById("genre").value == "Horror") {
        $("body").css("background-color", "#b5ead7");
    }
    else if (document.getElementById("genre").value == "SciFi") {
        $("body").css("background-color", "#d8d8d8");
    }
    else if (document.getElementById("genre").value == "Thriller") {
        $("body").css("background-color", "#ffdac1");
    }
    else {
        $("body").css("background-color", "#e7e7eb");
    }
}


// -----------------------Search a flick page------------------------
const searchButton = document.getElementById("search");
const inputValue = document.getElementById("inputValue");
const searchFilm = document.getElementById("searchMovie");


// Search for each movie and return only if poster available
function filmSections(films) {
    return films.map(function (film) {
        if (film.poster_path) {
            return `<div class="movie-results">
                <img class="mr-3 align-self-start searchMovie-poster" src="${imgURL + film.poster_path}">
                <div class="media-body searchMovie-info">
                    <h5 class="movie-title">${film.title}</h5>
                    <p class="movie-date">Release Date: ${film.release_date}</p>
                    <p class="movie-rating">IMDB Rating: ${film.vote_average}</p>
                    <p id="filmOverview" class="movie-overview"> ${film.overview}</p>
                    <button class="btn infoBtn" data-toggle="modal" data-target="#myModal"><i class="fa fa-info"></i></button>
                </div>
            </div>`
        }
    })
}

// Toggle display of movie overview
$(document).on('click', ".infoBtn", function(){
    $(this).siblings(".movie-overview").toggle(300);
})



function filmContainer(films) {
    let filmElement = document.getElementById("searchMovie");

    filmContent =
        `<div class="container">
            ${filmSections(films)}
    </div>
    `;



    filmElement.innerHTML = "";
    filmElement.innerHTML = filmContent;
    return filmElement;
}

$(searchButton).click(function () {
    const value = inputValue.value;
    let searchURL = url + "search/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&query=" + value;

    fetch(searchURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // slice to show only first 9 results
            let films = data.results.slice(0, 9);
            console.log("Films", films);

            filmContainer(films);
            inputValue.value = "";

            
        })
        .catch(function (error) {
            console.error("Something has gone wrong");
            console.error(error);
            if (error) {
                let errorElement = document.getElementById("searchMovie");
                errorElementTemplate =
                    `<div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 class="searchMovieError">Something went wrong, please enter the keyword and search again</h5>
                            </div>
                        </div>
                </div>`;
                errorElement.innerHTML = "";
                errorElement.innerHTML = errorElementTemplate;
            }
        })
    console.log("Value: ", value);
})




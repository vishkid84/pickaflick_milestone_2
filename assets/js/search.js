const searchButton = document.getElementById("search");
const inputValue = document.getElementById("inputValue");
const searchFilm = document.getElementById("searchMovie");


// Search for each movie and return only if poster available
function filmSections(films) {
    return films.map(function(film) {
        if (film.poster_path) {
            return `<div class="col-md-4 col-lg-3 movie-results">
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
    }).join('');
}

// Toggle display of movie overview on click of info button
$(document).on('click', ".infoBtn", function() {
    $(this).siblings(".movie-overview").toggle(300);
})

// Render to html
function filmContainer(films) {
    let filmElement = document.getElementById("searchMovie");

    filmContent =
        `<div class="container filmContenContainer">
            ${filmSections(films)}
    </div>
    `;
    filmElement.innerHTML = "";
    filmElement.innerHTML = filmContent;
    return filmElement;
}


$(searchButton).click(function() {
    const value = inputValue.value;
    let searchURL = url + "search/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&query=" + value;

    // Fetch from API on click of search button
    fetch(searchURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // slice to show only first 9 results
            let films = data.results.slice(0, 9);

            filmContainer(films);
            inputValue.value = "";

            // If no movie found, return error
            if (films == undefined || films.length == 0) {
                let emptyArray = document.getElementById("searchMovie");
                emptyArrayTemplate =
                    `<div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 class="searchMovieEmpty">No results found. Please try another movie</h5>
                            </div>
                        </div>
                </div>`;
                emptyArray.innerHTML = "";
                emptyArray.innerHTML = emptyArrayTemplate;
            }
        })
        .catch(function(error) {
            console.error("Something has gone wrong");
            console.error(error);

            // Return error message if empty string is returned
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
})
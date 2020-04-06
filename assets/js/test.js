const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const imgURL = "https://image.tmdb.org/t/p/w185/";

const searchButton = document.getElementById("pickflickBtn");
// const searchMovie = document.getElementById("searchMovie");

const url = "http://api.themoviedb.org/3/";


// Render to html
function pickaflickContainer(randomMovie) {
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
    if (document.getElementById("genre").value == "Any genre") {
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




// Search a flick


// function filmSections(films){
//     return films.map(function (film) {
//         return `
//             <img src=${img_URL + film.poster_path} alt="" data-movie-id=${film.id}>
//         `
//     })
// }

// function filmContainer(films){
//     let filmElement = document.createElement("div");
//     filmElement.setAttribute("class", "movieTitle")
//     filmTemplate = 
//     `
//     <section class="movieSections">
//         ${filmSections(films)}
//     </section>
    
//     <div class="content">
//         <p id="content-close">X</p>
//     </div>
//     `

//     filmElement.innerHTML = filmTemplate;
//     return filmElement;
// }

// $(searchButton).click(function () {
//     const value = inputValue.value;
//     let searchURL = url + "search/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&query=" + value;

//     fetch(searchURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         let films = data.results;
//         console.log("Films", films);
//         // let filmBlock = filmContainer(films);
//         // searchFilm.appendChild(filmBlock);
//     })
//     .catch(function (error) {
//         console.error("Something has gone wrong");
//         console.error(error);
//     })
//     console.log("Value: ", value);
// })
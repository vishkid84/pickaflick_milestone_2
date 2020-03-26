const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const img_URL = "https://image.tmdb.org/t/p/w500/"

const searchButton = document.getElementById("pickflickBtn");
// const searchMovie = document.getElementById("searchMovie");

const url = "http://api.themoviedb.org/3/";


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
        let el = document.getElementById("randomMovieResult");
            el.innerHTML = "";
            el.innerHTML = `<p>${randomMovie.title}</p>`;
        console.log("randomMovie", randomMovie);
    })
    .catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
})
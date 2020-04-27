$(document).ready(function(){
    // Search for each movie and return only if poster available
    function newArrivalSections(arrivals) {
    return arrivals.map(function (arrival) {
            if (arrival.poster_path) {
                return `<div class="col-md-4 col-lg-3 movie-results">
                    <img class="mr-3 align-self-start searchMovie-poster" src="${imgURL + arrival.poster_path}">
                    <div class="media-body searchMovie-info">
                        <h5 class="movie-title">${arrival.title}</h5>
                        <p class="movie-date">Release Date: ${arrival.release_date}</p>
                        <p class="movie-rating">IMDB Rating: ${arrival.vote_average}</p>
                        <p id="filmOverview" class="movie-overview"> ${arrival.overview}</p>
                        <button class="btn infoBtn" data-toggle="modal" data-target="#myModal"><i class="fa fa-info"></i></button>
                    </div>
                </div>`;
            }
        }).join('');
    }

    // Render to html
    function newArrivalContainer(arrivals) {
    let newArrivalElement = document.getElementById("newArrivals");

    let newArrivalContent =
        `<div class="container filmContenContainer">
            ${newArrivalSections(arrivals)}
        </div>`;

    newArrivalElement.innerHTML = "";
    newArrivalElement.innerHTML = newArrivalContent;
    return newArrivalElement;
    }
    
    // Fetch Now Playing list from the API 
    let arrivalsurl = url + "movie/now_playing?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US&page=1";
    fetch(arrivalsurl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // slice to show only first 9 results
            let arrivals = data.results.slice(0, 15);

            newArrivalContainer(arrivals);
        })
        .catch(function (error) {
            console.error("Something has gone wrong");
            console.error(error);
    });
});
const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
const imgURL = "https://image.tmdb.org/t/p/w185/";

const searchButton = document.getElementById("pickflickBtn");
// const searchMovie = document.getElementById("searchMovie");

const url = "http://api.themoviedb.org/3/";


// Render to html
// function pickaflickContainer(randomMovie){
//     let movieElement = document.getElementById("randomMovieResult");
//     let movieTitle = randomMovie.title;
//     let movieRating = randomMovie.vote_average;
//     let movieOverview = randomMovie.overview;
//     // let movieGenre = randomMovie.genre_ids;

//     pickflickaContent = 
//     `<div class="container">
//             <div class="row">
//                 <div class="col">
//                     <div class="media">
//                         <img class="mr-3 align-self-start" src="${imgURL + randomMovie.poster_path}">
//                         <div class="media-body movie-info">
//                             <h5 class="movie-title">${movieTitle}</h5>
//                             <p class="movie-rating">IMDB Rating: ${movieRating}</p>
//                             <p class="movie-rating">${movieOverview}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//             movieElement.innerHTML = "";
//             movieElement.innerHTML = pickflickaContent;
//     return movieElement;
// }



// $(searchButton).click(function () {
//     let randomURL = url + "movie/latest?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US";

//     fetch(randomURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         let movies = data.id;
//             var el = document.getElementById("Title");
//             el.innerHTML = "";
//             movies.forEach(function (movie) {
//                 el.innerHTML += `<p>${movie.title}</p>`;
//             })
        
//         // movies.map(function(randomMovie){
//         //     movies[Math.floor(Math.random() * movies.length)]
//         //     console.log(randomMovie);
//         // })
               
//     })
//     .catch(function (error) {
//         console.error("Something has gone wrong");
//         console.error(error);
//     })
// })

function getMovie() {
    var baseURL = url + "movie/latest?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US";
    fetch(baseURL).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.dir(data);
            var movies = data.id;
            console.log(movies);
            
           let randomMovie = movies.map(function(movie){
                movie[Math.floor(Math.random() * movie.length)];
            })

            console.log(randomMovie);

    }).catch(function (error) {
        console.error("Something has gone wrong");
        console.error(error);
    })
}

getMovie();

// function genrePicker(data){
//     // let movies = data.results;
//         let actionMovies = data.id.filter(function(movies){
//                 return movies.genre.ids.includes(28);
//             })
//         // let comedyMovies = data.results.filter(function(movies){
//         //         return movies.genre_ids.includes(35);
//         //     })
//         // let dramaMovies = data.results.filter(function(movies){
//         //         return movies.genre_ids.includes(18);
//         //     })
//         // let horrorMovies = data.results.filter(function(movies){
//         //         return movies.genre_ids.includes(27);
//         //     })
//         // let scifiMovies = data.results.filter(function(movies){
//         //         return movies.genre_ids.includes(878);
//         //     })
//         // let thrillerMovies = data.results.filter(function(movies){
//         //         return movies.genre_ids.includes(53);
//         //     })
        
//         // Taget the genre dropdown and filter by genre id in the API 
//         if (document.getElementById("genre").value == "Action") {
//              randomMovie = actionMovies[Math.floor(Math.random() * actionMovies.length)];
//         }
//         // else if (document.getElementById("genre").value == "Comedy") {
//         //     randomMovie = comedyMovies[Math.floor(Math.random() * comedyMovies.length)];
//         // }
//         // else if (document.getElementById("genre").value == "Drama") {
//         //     randomMovie = dramaMovies[Math.floor(Math.random() * dramaMovies.length)];
//         // }
//         // else if (document.getElementById("genre").value == "Horror") {
//         //     randomMovie = horrorMovies[Math.floor(Math.random() * horrorMovies.length)];
//         // }
//         // else if (document.getElementById("genre").value == "SciFi") {
//         //     randomMovie = scifiMovies[Math.floor(Math.random() * scifiMovies.length)];
//         // }
//         // else if (document.getElementById("genre").value == "Thriller") {
//         //     randomMovie = thrillerMovies[Math.floor(Math.random() * thrillerMovies.length)];
//         // }
//         else{
//             randomMovie = movies[Math.floor(Math.random() * movies.length)];
//         }
// }

// function ratingPicker(data){
//     let belowFourRange = {min:1, max:4}
//     let fourSixRange = {min:4, max:6}
//     let sixEightRange = {min:6, max:8}
//     let aboveEightRange = {min:8, max:10}
//     // let ratedMovies = data.results.vote_average;

//     let belowFour = data.results.filter(function(movies){
//                 return movies.vote_average <= belowFourRange.max && movies.vote_average >= belowFourRange.min;
//             })

//     let fourSix = data.results.filter(function(movies){
//                 return movies.vote_average <= fourSixRange.max && movies.vote_average >= fourSixRange.min;
//             })

//     let sixEight = data.results.filter(function(movies){
//                 return movies.vote_average <= sixEightRange.max && movies.vote_average >= sixEightRange.min;
//             })

//     let aboveEight = data.results.filter(function(movies){
//                 return movies.vote_average <= aboveEightRange.max && movies.vote_average >= aboveEightRange.min;
//             })
        
//         // Taget the rating dropdown and filter by vote_average in the API 
//         if (document.getElementById("rating").value == "Below 4") {
//             randomMovie = belowFour[Math.floor(Math.random() * belowFour.length)];
//         }
//         else if (document.getElementById("rating").value == "4-6") {
//             randomMovie = fourSix[Math.floor(Math.random() * fourSix.length)];
//         }
//         else if (document.getElementById("rating").value == "6-8") {
//             randomMovie = sixEight[Math.floor(Math.random() * sixEight.length)];
//         }
//         else if (document.getElementById("rating").value == "Above 8") {
//             randomMovie = aboveEight[Math.floor(Math.random() * aboveEight.length)];
//         }
//         else{
//             randomMovie = movies[Math.floor(Math.random() * movies.length)];
//         }
// }
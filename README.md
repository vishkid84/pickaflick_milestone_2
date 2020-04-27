# Pickaflick-milestone-project

This is a site intended to all movie lovers who have a hard time picking what movie to watch. The site generates a random movie based on the genre selected.
All the movies generated have a rating of 5.5 or more. The site also has a search page to search for a movie, a new arrivals page to see the movies running in theatres now
and a movie quiz page to test your movie knowledge. 

You can find the deployed site [here](https://vishkid84.github.io/pickaflick_milestone_2/)

## UX

### User stories

- As a movie buff, it is a challenge to pick a movie to watch. I sometimes spend ages looking at movie rating and reviews before I pick a movie.<br>
- It would be nice have an interactive movie app instead of generating just movie results I search for.

### Strategy

The aim is to create an all purpose website app which interests people who spent their time watching a lot of movies. 
The main purpose of the website though is to help them pick a movie to watch, hence the site name pick-a-flick. 

### Scope

As a movie lover myself, it is sometimes really hard to choose a movie to watch. I reached out to friends and other people who have similar interests, their experience was not much different.  
On further research among those groups, I identified two main factors by which they filter movies to watch - genre and movie rating. 
Those people who were really big fans of movies also spend time playing games related to movies. 
Based on the above and further research on other movie databases, I decided to add 4 features - Main page to generate random movie, a search page, 
new arrivals page and movie quiz.

### Structure

Structuring was quite straight forward for me in this case. The home page would be the pick-a-flick page to generate random movie. This shoud include options to choose the genre. 
Search page was found to be necessary in a database, so that would come second. 
The new arrivals also produce results of movies so I decided to keep that as third and finally move into the quiz game. 

### Skeleton

You can see the wireframes saved as pdf below:

[Wireframe](https://github.com/vishkid84/pickaflick_milestone_2/blob/master/assets/wireframes/Pickaflick_wireframe.pdf)<br>


### Surface

The website was created in an easily navigatable manner with the 4 sections separated as 4 different pages.<br>
The original idea for 'pick a flick' page was to include filter for genre and rating for the home page but the API did not have an option to return all the movies at once and 
choose from that. Instead returns page with an array of 20 results. So to pick a random movie, I randomized the page number. To get better results from 
fewer number of movies, I did not include filter by rating. Instead decided to filter by average rating. From my research with friends and web, average rating 
was considered to be 6 for most genre but horror usually seems to have lower rating. So to be fair, the average rating was concluded to be 5.5. <br>
Consistently styled movie results container was added for the results in all the pages. <br>
For the quiz page, a simple quiz container layout was added where right answer turns green and wrong changes to red background. The quiz question is the movie overview of a random movie
from the API, right answer shows the movie name and wrong answer returns another random movie name.

## Features

There are 4 sections in the navbar:
1. Pick a flick: A page that returns a random movie which can be filtered by genre. All the movies generated would have a rating of 5.5 or more.
2. Search a flick: Returns top 9 results based on the keyword searched. More than 9 seemded too much for a search result to scroll through. 
3. New arrivals: Returns 15 of the movies running in theatres in Ireland.
4. Flick quiz: A quiz game to guess the movie from the synopsis provided.

### Existing Features
- Feature 1 - Responsive layout
- Feature 2 - Interactive website 

### Features Left to Implement
- For future, I plan to add a background instead of the plain color background. 
- Currently, the site does not work on IE as Fetch funcion does not work in IE. I plan to add that functionality at a later stage. 

## Technologies Used

HTML <br>
CSS <br>
Google fonts <br>
Bootstrap <br>
Javascript <br>
jQuery <br>
APIs

## Testing
I used an [Excel](https://github.com/vishkid84/pickaflick_milestone_2/blob/master/assets/Testing/Testing%20Excel.xlsx) to update my testing. 
I have pasted a screenshot of that below. 

![Test matrix](https://github.com/vishkid84/pickaflick_milestone_2/blob/master/assets/Testing/Test_screenshot.png)

#### Links tested
All the links in the site have been tested manually and found to be working successfully.  

#### Validations
Validated html and css with W3C validator and JS with beautifytools.com.

#### Responsiveness
The website is created to be responsive, the way the results appear is different in mobile, tablet and desktop. 
Tested across multiple devices using devices directly where available and by using https://www.browserstack.com/ for others.

#### Browser compatibility
The website has been tested across different browsers (Chrome, Firefox, Opera, Microsoft Edge). The site does not work properly in IE as the JS fetch 
function is not compatible in IE but since usage share of IE as per StatCounter as per Oct 2019 is less than 2%, I dont find this much as a problem. 

#### Noted errors/issues
Error message has been added if no movie is found in the pick-a-flick page. <br>
Error message has been added if no keyword entered in the search bar in the Search a movie page. <br>
Error message has been added if no movie returns with the entered keyword in the Search a movie page. <br>

The quiz score has two glitches: 
1. The score keeps adding if the right answer is clicked more than once. This is to be fixed at a later stage. 
2. Rare chance that the same answer appears for both options but score adds when clicked on either. So retained as such for now but to be fixed at a later stage.


## Deployment

The site was written in gitpod and pushed into the GitHub repository. This is hosted using GitHub, deployed directly from the master branch. 
To deploy the website from GitHub, I went into the settings section --> GitHub Pages and selected the master branch to publish the site. 
The deployed site will update automatically upon new commits to the master branch.

To run this locally, open the command prompt or terminal. Then paste this into it: 'git clone https://vishkid84.github.io/pickaflick_milestone_2.git'

## Credits

### Content

All the text content were written by me.
All the results are generated from The Movie Database API [https://developers.themoviedb.org/3/getting-started/introduction]

### Media

The posters of the movies generated from The Movie Database API [https://developers.themoviedb.org/3/getting-started/introduction]

### Acknowledgements

The API used is [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). <br>
I had to refer various sources sometimes to find solutions for Javascript, mainly API, TMDB and quiz tutorials in YouTube, stackoverflow for randomize and filter functions,
w3schools for few styles and scripts.  
<<<<<<< HEAD
Main sources are [Search tutorial](https://www.youtube.com/watch?v=mWg2udweauY), [randomize](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range)
and [filter](https://www.w3schools.com/jsref/jsref_filter.asp).
=======
Main sources are [movie database tutorial](https://www.youtube.com/watch?v=mWg2udweauY), [randomize](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range)
and [filter](https://www.w3schools.com/jsref/jsref_filter.asp).
>>>>>>> af8d4a4c5002a5b5d54326e088044ac40cc893fb

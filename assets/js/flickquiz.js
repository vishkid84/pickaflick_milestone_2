$(document).ready(function() {
    let score = 0;
    let questionIndex = 0;
    let questionIndexNumber = document.getElementById("questionIndexNumber");
    questionIndexNumber.innerHTML = questionIndex;
    let questionElement = document.getElementById("question");
    let answerOne = document.getElementById("answer1");
    let answerTwo = document.getElementById("answer2");
    let answerElements = [answerOne, answerTwo];


    // Quiz to appear with click of start button
    $(".startBtn").on("click", function() {
        $(".start-container").hide(300);
        $(".main-heading").hide(300);
        $(".quiz-container").fadeIn(300);
    });


    $("button").click(function() {
        // Return random page number to generate results from random page
        function pageNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var page = pageNumber(1, 500);

        // Alternate randomly between two options
        let randomAnswerElement = answerElements[Math.floor(Math.random() * answerElements.length)];
        let randomURL = url + "discover/movie?api_key=a633b83aa763a0e8fad2c80cc66c54b9&language=en-US&page=" + page;


        fetch(randomURL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let movies = data.results;
                showQuestionAnswer(movies);
                nextClick();
                pageNumber(questionIndexNumber);

                // Change question number with click of button
                function pageNumber(questionIndexNumber) {
                    questionIndexNumber.innerHTML = questionIndex += 1;
                    if (questionIndex === 6) {
                        $(".quiz-container").hide();
                        $(".scoreContainer").show();
                        $(".reset-quiz-container").show();
                    }
                }

            })
            .catch(function(error) {
                console.error("Something has gone wrong");
                console.error(error);
            });

        function showQuestionAnswer(movies) {
            // Return random movie in the page
            let randomMovie = movies[Math.floor(Math.random() * movies.length)];
            questionElement.innerHTML = randomMovie.overview; //returns quiz question which is the movie overview

            // get random wrong movie from API
            let randomWrongAnswer = movies[Math.floor(Math.random() * movies.length)];

            // get right movie title from API
            let randomRightAnswer = randomMovie.title;

            randomAnswerElement.innerHTML = randomWrongAnswer.title; //returns wrong answer
            if (randomAnswerElement == answerOne) {
                answerTwo.innerHTML = randomRightAnswer;
            } else {
                answerOne.innerHTML = randomRightAnswer;
            }
            checkAnswer(randomRightAnswer);
        }

        function checkAnswer(randomRightAnswer) {
            let answerClass = document.getElementById("answer");
            // Change anwerClass to array, check if answer is correct in the children div 
            Array.from(answerClass.children).forEach(answer => {
                $(answer).click(function() {
                    if (this.innerText == randomRightAnswer) {
                        $(this).addClass("rightAnswer");
                        $(this).removeClass("wrongAnswer");
                        score += 1;
                        let scoreValue = document.getElementById("scoreResult");
                        scoreValue.innerHTML = score;
                    } else {
                        $(this).addClass("wrongAnswer");
                    }
                });
            });
        }

        // Reset selection on click of next button
        function nextClick() {
            $(".nextButton").click(function() {
                $(".answer-selection").removeClass("rightAnswer");
                $(".answer-selection").removeClass("wrongAnswer");
            });
        }

        // Reset quiz by reloading the page
        $(".resetQuizLink").click(function() {
            $(location).attr('href', "flickquiz.html");
        });

    });

});
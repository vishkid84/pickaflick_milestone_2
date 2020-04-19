// const APIKey = "a633b83aa763a0e8fad2c80cc66c54b9";
// const imgURL = "https://image.tmdb.org/t/p/w185";

// const url = "http://api.themoviedb.org/3/";

$(document).ready(function(){
    let score = 0;
    let questionIndex = 0;
    let questionIndexNumber = document.getElementById("questionIndexNumber");
        questionIndexNumber.innerHTML = questionIndex;
    let questionElement = document.getElementById("question");
    let answerOne = document.getElementById("answer1");
    let answerTwo = document.getElementById("answer2");
    let answerElements = [answerOne, answerTwo];
    // Alternate randomly between two options
    let randomAnswerElement = answerElements[Math.floor(Math.random() * answerElements.length)];
   

    $(".startBtn").on("click",function(){
        $(".start-container").hide(300);
        $(".quiz-container").fadeIn(300);
    })

    $("button").click(function(){
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
                let movies = data.results;
                showQuestionAnswer(movies);
                nextClick();
                pageNumber(questionIndexNumber);

                function pageNumber(questionIndexNumber){
                    questionIndexNumber.innerHTML = questionIndex +=1;
                    if (questionIndex === 6) {
                        $(".quiz-container").hide();
                        $(".scoreContainer").show();
                        $(".reset-quiz-container").show();
                    }
                }

            })
            .catch(function (error) {
                console.error("Something has gone wrong");
                console.error(error);
            })
    }) 


    
    function showQuestionAnswer(movies){
        
        let randomMovie = movies[Math.floor(Math.random() * movies.length)];
        questionElement.innerHTML = randomMovie.overview;

        // Answer array
        // let wrongAnswer = questions[0].answers;

        // get random wrong movie from array
        let randomWrongAnswer = movies[Math.floor(Math.random() * movies.length)];

        // get right movie title from json
        let randomRightAnswer = randomMovie.title;     

        randomAnswerElement.innerHTML = randomWrongAnswer.title; //returns wrong answer
        if (randomAnswerElement == answerOne) {
            answerTwo.innerHTML = randomRightAnswer;
        }else {
            answerOne.innerHTML = randomRightAnswer;
        }
        checkAnswer(randomRightAnswer)
    }  

    function checkAnswer(randomRightAnswer){
        let answerClass = document.getElementById("answer");
        Array.from(answerClass.children).forEach(answer => {
            $(answer).click(function(){
                if (this.innerText == randomRightAnswer) {
                    $(this).addClass("rightAnswer");
                    $(this).removeClass("wrongAnswer");
                    score +=5;
                    console.log(score);
                    let scoreValue = document.getElementById("scoreResult");
                        scoreValue.innerHTML = score;
                } else {
                    $(this).addClass("wrongAnswer");
                }
            })
        });
    }

    function nextClick (){
        $(".nextButton").click(function(){
            clearForms();
            $(".custom-control").removeClass("rightAnswer");
            $(".custom-control").removeClass("wrongAnswer");
        })
    }

    $(".resetQuizLink").click(function(){
        $(location).attr('href',"flickquiz.html");
    })

    function clearForms()
    {
        $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
        $(':checkbox, :radio').prop('checked', false);
    }

})


    


    
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
    let questions =[
        {question: "Some movie",
        answers: [
            {answer: "Shutter Island"},
            {answer: "Shawshank Redemption"},
            {answer: "Fast and Furious"},
            {answer: "Rush Hour"}
        ]}
    ]

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
                nextClick(movies);
                pageNumber(questionIndexNumber);

                function pageNumber(questionIndexNumber){
                    questionIndexNumber.innerHTML = questionIndex +=1;
                    if (questionIndex === 6) {
                        $(".quiz-container").hide();
                        let resultElement = document.getElementById("quizResult");
                        quizResultTemplate =
                            `<div class="container">
                                <div class="row">
                                    <div class="col">
                                        <h5 class="randomMovieError">You scored the result</h5>
                                    </div>
                                </div>
                        </div>`;
                        resultElement.innerHTML = "";
                        resultElement.innerHTML = quizResultTemplate;
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
        console.log(randomMovie.overview);
        questionElement.innerHTML = randomMovie.overview;

        // Answer array
        let wrongAnswer = questions[0].answers;

        // get random wrong movie from array
        let randomWrongAnswer = wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)]

        // get right movie title from json
        let randomRightAnswer = randomMovie.title;     

        console.log(randomWrongAnswer.answer); //returns wrong answer
        randomAnswerElement.innerHTML = randomWrongAnswer.answer; //returns wrong answer
        if (randomAnswerElement == answerOne) {
            console.log(answerTwo.innerHTML = randomRightAnswer)
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
                    // $(this).siblings().css("background-color", "red");
                } else {
                    $(this).addClass("wrongAnswer");
                    // $(this).siblings().css("background-color", "green");
                }
            })
        });
    }

    function nextClick (movies){
        
        $(".nextButton").click(function(){
            
            showQuestionAnswer(movies);
            clearForms();
            $(".custom-control").removeClass("rightAnswer");
            $(".custom-control").removeClass("wrongAnswer");
        })
    }

    

    function clearForms()
    {
        $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
        $(':checkbox, :radio').prop('checked', false);
    }

})

    


    
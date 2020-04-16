$(document).ready(function(){
    
    let questionIndex = 0;
    let questionElement = document.getElementById("question");
    let answerOne = document.getElementById("answer1");
    let answerTwo = document.getElementById("answer2");
    let answerElements = [answerOne, answerTwo];
    // Alternate randomly between two options
    let randomAnswerElement = answerElements[Math.floor(Math.random() * answerElements.length)];
    let questions =[
        {
        answers: [
            {answer: "Shutter Island"},
            {answer: "Shawshank Redemption"},
        ]}
    ]
   
    
    $(".startBtn").on("click",function(){
        $(".start-container").hide(300);
        $(".quiz-container").fadeIn(300);
        nextQuestion();
    })

    function nextQuestion(){
        let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        showQuestion(randomQuestion[questionIndex]);
    }

    function showQuestion(){
        let currentQuestion = questions[questionIndex];
        console.log(questions[questionIndex].question);
        questionElement.innerHTML = currentQuestion.question;
    }  
    
    function showAnswer(){
        let wrongAnswer = questions[questionIndex].answers;
        let randomWrongAnswer = wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)]
        console.log(randomWrongAnswer.answer);
        randomAnswerElement.innerHTML = randomWrongAnswer.answer;
        if (randomAnswerElement == answerOne) {
            console.log(answerTwo.innerHTML = "The other movie")
            answerTwo.innerHTML = "The other movie";
        }else {
            answerOne.innerHTML = "The other movie";
        }
    }
    showAnswer();
})


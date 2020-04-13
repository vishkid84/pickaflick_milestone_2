$(document).ready(function(){
    
    let questionIndex = 0;
    let questionElement = document.getElementById("question");
    // let answerElement = document.getElementById("answer");
    let questions =[
        {question: "Two people walk hand in hand",
        answers: [
            {text: "Shutter Island", correct: true},
            {text: "Shawshank Redemption", correct: false},
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
        console.log(questions[questionIndex].question);
        questionElement.innerHTML = questions[questionIndex].question;
    }    
    
})


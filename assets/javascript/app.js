$(document).ready(function () {
    console.log("lets play!");
    /* ----------------> below is how the  game is formatted on load <------------------ */
    $('#ans1').parent().hide()
    $('#ans2').parent().hide()
    $('#ans3').parent().hide()
    $('#ans4').parent().hide()
    $('#quiz').hide()
    $('#score-up').hide()
    $('.game-over').hide()
    $('#up').hide()
    $('#down').hide()
    $('#wr').hide()
    $('#ql').hide()
    /* ----------------> makes sure the question posting order is random <------------------ */
    newQPosition()
    /* ---------------->  <------------------ */
});

var questionList = [];
var theGoodAnswer = [];
var theWrongAnswer1 = [];
var theWrongAnswer2 = [];
var theWrongAnswer3 = [];
var numberUp = "";
var numberDown = "";
var numberLeft = "";




function newGame() {

    var queryURL = "https://opentdb.com/api.php?amount=10&type=multiple"

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {

        var QuestionsLeft = 10;
        var questionDiv = $("<div>");
        var p = $("<p>").html(response.results[0].question);
        $(questionDiv).append(p);

        /* ----------------> where the 10 questions are called from <------------------------------ */
        questionList = [
            (response.results[0].question),
            (response.results[1].question),
            (response.results[2].question),
            (response.results[3].question),
            (response.results[4].question),
            (response.results[5].question),
            (response.results[6].question),
            (response.results[7].question),
            (response.results[8].question),
            (response.results[9].question)
        ]
        /* ----------------> where the 10 correct answers are called from <------------------------ */
        theGoodAnswer = [
            (response.results[0].correct_answer),
            (response.results[1].correct_answer),
            (response.results[2].correct_answer),
            (response.results[3].correct_answer),
            (response.results[4].correct_answer),
            (response.results[5].correct_answer),
            (response.results[6].correct_answer),
            (response.results[7].correct_answer),
            (response.results[8].correct_answer),
            (response.results[9].correct_answer)
        ]

        /* ----------------> where the 10 incorrect #1 answers are called from <------------------- */
        wrongAnswer1 = [
            (response.results[0].incorrect_answers[0]),
            (response.results[1].incorrect_answers[0]),
            (response.results[2].incorrect_answers[0]),
            (response.results[3].incorrect_answers[0]),
            (response.results[4].incorrect_answers[0]),
            (response.results[5].incorrect_answers[0]),
            (response.results[6].incorrect_answers[0]),
            (response.results[7].incorrect_answers[0]),
            (response.results[8].incorrect_answers[0]),
            (response.results[9].incorrect_answers[0])
        ]
        /* ----------------> where the 10 incorrect #2 answers are called from <------------------- */
        wrongAnswer2 = [
            (response.results[0].incorrect_answers[1]),
            (response.results[1].incorrect_answers[1]),
            (response.results[2].incorrect_answers[1]),
            (response.results[3].incorrect_answers[1]),
            (response.results[4].incorrect_answers[1]),
            (response.results[5].incorrect_answers[1]),
            (response.results[6].incorrect_answers[1]),
            (response.results[7].incorrect_answers[1]),
            (response.results[8].incorrect_answers[1]),
            (response.results[9].incorrect_answers[1])
        ]

        /* ----------------> where the 10 incorrect #3 answers are called from <------------------- */
        wrongAnswer3 = [
            (response.results[0].incorrect_answers[2]),
            (response.results[1].incorrect_answers[2]),
            (response.results[2].incorrect_answers[2]),
            (response.results[3].incorrect_answers[2]),
            (response.results[4].incorrect_answers[2]),
            (response.results[5].incorrect_answers[2]),
            (response.results[6].incorrect_answers[2]),
            (response.results[7].incorrect_answers[2]),
            (response.results[8].incorrect_answers[2]),
            (response.results[9].incorrect_answers[2])
        ]
    })
};

/* ----------------> global variable for when a new game is called <------------------ */
newGame()

/* ----------------> Timeing Variables <------------------ */
var initial = 15000;
var count = initial;
var counter = 1000; //10 will  run it every 100th of a second
var decimals = 4;

//this variable tells the below nextElement function to only move one comma at a time on command
/* ----------------> the number position the new Q&A will move through the quiz <------------------ */
var answerIndex = 1
var answerIndex1 = 1
var answerIndex2 = 1
var answerIndex3 = 1

function nextQuestion() {

    newQPosition()

    currentIndex++

    var quesList = document.getElementById('quiz');
    var theGoodAns = document.getElementById('ans1');
    var wrongAns1 = document.getElementById('ans2');
    var wrongAns2 = document.getElementById('ans3');
    var wrongAns3 = document.getElementById('ans4');


    quesList.innerHTML = questionList[currentIndex];
    theGoodAns.innerHTML = theGoodAnswer[currentIndex];
    wrongAns1.innerHTML = wrongAnswer1[currentIndex];
    wrongAns2.innerHTML = wrongAnswer2[currentIndex];
    wrongAns3.innerHTML = wrongAnswer3[currentIndex];

}

// this is how the questions load to the game on start

var questionList = document.getElementById('quiz');
var theGoodAnswer = document.getElementById('ans1');
var wrongAnswer1 = document.getElementById('ans2');
var wrongAnswer2 = document.getElementById('ans3');
var wrongAnswer3 = document.getElementById('ans4');

/* ----------------------------------------> sends answers to id in DOM <----------- */
$("#quiz").append(questionList);
$("#ans1").append(theGoodAnswer);
$("#ans2").append(wrongAnswer1);
$("#ans3").append(wrongAnswer2);
$("#ans4").append(wrongAnswer3);
/* -----------------------------------------> timer begin <------------------------- */
function timer() { /* --->  <--- */

    if (--count == 0) {
        stopTimer();
    }
    if (count <= 1) {
        newGame()
        $('#quiz').text("Time Is up you didnt win this round. Are you ready to try your luck again?")
        $('#start').parent().show(500)
        $('#timer').fadeOut()
        $('#options').fadeOut()
        $('#ql').fadeOut(6000)
        $('#down').fadeOut(3000)
        $('#score-up').fadeOut(3000)
        $('#wr').fadeOut(3000)
        $('#up').fadeOut(3000)
        
     

        count = initial;
        clearInterval(counter)
        return;
    };
    var current = Date.now()
    count = count - (current - initialMillis);
    initialMillis = current;
    displayCount(count);

}

function displayCount(count) { /* ------------> sends the timer to the screen <------------------------- */
    var res = count / 1000; 

    document.getElementById("timer")
        .innerHTML = Math.ceil(res);

}
/* -------------------------------------------> event handler to start game begin <--------------------- */
$('#start').on('click', function () {

    $(this).parent().hide() /* -----------------------------> hides the start button <------------- */
    $('#ans1').parent().fadeIn(1000) /* --------------------> brings in answer 1 <----------------- */
    $('#ans2').parent().fadeIn(1200) /* --------------------> brings in answer 2 <----------------- */
    $('#ans3').parent().fadeIn(1400) /* --------------------> brings in answer 3 <----------------- */
    $('#ans4').parent().fadeIn(1600)
    $('#timer').fadeIn(1000)
    $('#quiz').fadeIn(1800) /* -----------------> brings in the question to be answered <---------- */
    $('#options').fadeIn() /* ------------------> brings in answer 4 <----------------------------- */
    $('#ql').fadeIn(1000) /* -------------------> brings in the questions left counter <----------- */

    currentIndex = 0;

    initialMillis = Date.now();
    counter = setInterval(timer, 1000)

    var quesList = document.getElementById('quiz');
    var theGoodAns = document.getElementById('ans1');
    var wrongAns1 = document.getElementById('ans2');
    var wrongAns2 = document.getElementById('ans3');
    var wrongAns3 = document.getElementById('ans4');


    quesList.innerHTML = questionList[0];
    theGoodAns.innerHTML = theGoodAnswer[0];
    wrongAns1.innerHTML = wrongAnswer1[0];
    wrongAns2.innerHTML = wrongAnswer2[0];
    wrongAns3.innerHTML = wrongAnswer3[0];



});

/* --------------------------------------------> correct answer <--------------------------------------- */
$('#ans1').parent().on('click', function () {
    setTimeout(function () {
        nextQuestion()
    }, 1000)
    if(numberUp == 10){
        Alert("Your A Winner!")
    }
    $('#jumbotron').fadeOut(1000).fadeIn(1000);
    $("#ans2").parent().fadeIn(900);
    $("#ans3").parent().fadeIn(900);
    $("#ans4").parent().fadeIn(900);
    $('#score-up').fadeIn(1000);
    $('#up').text("Correct:");
    $('#up').fadeIn(1000);


    clearInterval(counter);
    initialMillis = Date.now();
    counter = setInterval(timer, 1000)
    count = initial;
    displayCount(count);
    var numberUp = parseInt($('#score-up').text());
    numberUp += 1;
    var numberLeft = parseInt($('#questions-left').text());
    numberLeft -= 1;
    $('#score-up').text(numberUp);
    $('#questions-left').text(numberLeft);
    if (numberLeft == 0) {

        $("#timer").text("you got  " + numberUp + " answer correct!");
        $("#winner").html("<br><div>Your a winner!</div>");
        $('#start').parent().show(8000);
        $('#down').fadeOut();
        $('#score-up').hide();
        $('#options').fadeOut();
        $('#ql').fadeOut(2000);
        $('#quiz').fadeOut(2000);
        $('#wr').fadeOut(2000);
        $('#up').fadeOut();
        $("#score-up").text(0);
        count = initial;
        clearInterval(counter);
        clearInterval(quesList);
        clearInterval(numberDown);
        clearInterval(numberUp);
        displayCount(count);


        return;
    }

});
/* --------------------------------------------> incorrect answer <------------------------------------- */
$('#ans2').parent().on('click', function () {
    var numberDown = parseInt($('#down').text());
    numberDown += 1;
    $('#down').text(numberDown).fadeIn(3000);
    $('#wr').text("Wrong: ");
    $("#ans2").parent().fadeOut(900)
    $('#wr').fadeIn(1000)
    $('#timer').fadeIn(1000)
    $('#down').fadeIn(1000)

    if (numberDown === 10) {

        $('#quiz').text("Time Is up you didnt win this round. Are you ready to try your luck again?")
        clearInterval(counter);
        $('#start').parent().show(8000)
        $('#score-up').fadeOut(2000)
        $('#down').fadeOut(2000)
        $('#options').fadeOut()
        $('#ql').fadeOut(2000)
        $('#timer').fadeOut(2000)
        $('#quiz').fadeOut(2000)
        $('#wr').fadeOut(2000)
        $('#up').fadeOut(2000)

        count = initial;
        clearInterval(counter);
        clearInterval(quesList);
        clearInterval(numberDown);
        clearInterval(numberUp);
        displayCount(count);


        return;
    }
});
/* --------------------------------------------> incorrect answer <------------------------------------- */
$('#ans3').parent().on('click', function () {
    var numberDown = parseInt($('#down').text());
    numberDown += 1;
    $('#down').text(numberDown).fadeIn(3000);
    $('#wr').text("Wrong: ");
    $('#ans3').parent().fadeOut(900)
    $('#wr').fadeIn(1000)
    $('#timer').fadeIn(1000)
    $('#down').fadeIn(1000)

    if (numberDown === 10) {

        $('#quiz').text("Time Is up you didnt win this round. Are you ready to try your luck again?")

        clearInterval(counter);
        $('#start').parent().show(8000)
        $('#score-up').fadeOut(2000)
        $('#down').fadeOut(2000)
        $('#options').fadeOut()
        $('#ql').fadeOut(2000)
        $('#timer').fadeOut(2000)
        $('#quiz').fadeOut(2000)
        $('#wr').fadeOut(2000)
        $('#up').fadeOut(2000)

        count = initial;
        clearInterval(counter);
        clearInterval(quesList);
        clearInterval(numberDown);
        clearInterval(numberUp);
        displayCount(count);


        return;
    }
});
/* --------------------------------------------> incorrect answer <------------------------------------- */
$('#ans4').parent().on('click', function () {
    var numberDown = parseInt($('#down').text());
    numberDown += 1;
    $('#down').text(numberDown).fadeIn(3000);
    $('#wr').text("Wrong: ");
    $('#ans4').parent().fadeOut(900)
    $('#wr').fadeIn(1000)
    $('#timer').fadeIn(1000)
    $('#down').fadeIn(1000)

    if (numberDown === 10) {

        $('#quiz').text("Time Is up you didnt win this round. Are you ready to try your luck again?")
        clearInterval(counter);
        $('#start').parent().show(8000)
        $('#score-up').fadeOut(2000)
        $('#down').fadeOut(2000)
        $('#options').fadeOut()
        $('#ql').fadeOut(2000)
        $('#timer').fadeOut(2000)
        $('#quiz').fadeOut(2000)
        $('#wr').fadeOut(2000)
        $('#up').fadeOut(2000)

        count = initial;
        clearInterval(counter);
        clearInterval(quesList);
        clearInterval(numberDown);
        clearInterval(numberUp);
        displayCount(count);


        return;
    }
});
/* --------------------------------------------> sets answer position randomly <---------- */
var answerRandom = options.children

function newQPosition() {
    var options = document.querySelector('#options');
    for (var i = options.children.length; i >= 0; i--) {
        var randomizer = options.children[(Math.floor(Math.random() * i))];

        options.appendChild(randomizer)
    }
};

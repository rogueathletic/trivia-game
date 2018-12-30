$(document).ready(function () {
    console.log("ready!");

    $('#ans1').parent().hide()
    $('#ans2').parent().hide()
    $('#ans3').parent().hide()
    $('#ans4').parent().hide()
    $('#quiz').hide()
    $('#up').hide()
    $('#down').hide()
    $('#wr').hide()
    $('#ql').hide()
    $('.my-4').hide()
    $('#score-up').hide()

});

var queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";



$.ajax({
    url: queryURL,
    method: "GET"

}).then(function (response) {
    console.log('response', response);

    var ourQuestions = response.results;

    var QuestionsLeft = 10;

    console.log(ourQuestions[0].question);




    var questionDiv = $("<div>");
    console.log('questionDiv', questionDiv);

    var p = $("<p>").html(ourQuestions[0].question);
    $(questionDiv).append(p);
    $("#quiz").append(questionDiv);
    var correct_answer = response.results[0].correct_answer;
    var incorrect_answers = response.results[0].incorrect_answers;
    var answerGroup = [correct_answer, incorrect_answers];
    let corrAns = (response.results[0].correct_answer)
    let inCorrAns = (response.results[0].incorrect_answers[0])
    let inCorrAns1 = (response.results[0].incorrect_answers[1])
    let inCorrAns2 = (response.results[0].incorrect_answers[2])
    let allApi = [corrAns, inCorrAns, inCorrAns1, inCorrAns2, questionDiv]
    var initial = 10000;
    var count = initial;
    var counter = 10; //10 will  run it every 100th of a second
    var initialMillis;
    var decimals = 2;

/* ---------> sends answers to id in DOM <---------- */
    $("#ans1").append(corrAns);
    $("#ans2").append(inCorrAns);
    $("#ans3").append(inCorrAns1);
    $("#ans4").append(inCorrAns2);


/* ---------> timer begin <---------- */
    function timer() {     /* --->  <--- */
        if (--count < 0) {
                    stopTimer();
                }
        

        var current = Date.now()     /* --->  <--- */
        count = count - (current - initialMillis);     /* --->  <--- */
        initialMillis = current;     /* --->  <--- */
        displayCount(count);     /* --->  <--- */
        console.log('displayCount', displayCount);     /* --->  <--- */
    }

    function displayCount(count) {     /* --->  <--- */
        var res = count / 1000;     /* --->  <--- */
        document.getElementById("timer").innerHTML = res.toPrecision(count.toString().length - (1 -decimals));

    }
    /* ---------> on click funcitions begin <---------- */
    $('#start').on('click', function () {     /* ---> action to start game <--- */
        $(this).parent().hide()     /* ---> hides the start button <--- */
        $('#ans1').parent().fadeIn(1000)     /* ---> brings in answer 1 <--- */
        $('#ans2').parent().fadeIn(1200)     /* ---> brings in answer 2 <--- */
        $('#ans3').parent().fadeIn(1400)     /* ---> brings in answer 3 <--- */
        $('#ans4').parent().fadeIn(1600)     /* ---> brings in answer 4 <--- */
        $('#quiz').fadeIn(1800)     /* ---> brings in the question to be answered <--- */
        $('#ql').fadeIn(1000)     /* ---> brings in the questions left counter <--- */
        $('.my-4').fadeIn(31500)
        initialMillis = Date.now();     /* ---> allows for milli seconds to be added to time for effect  <--- */
        counter = setInterval(timer, counter) 
        
    });


/* ---------> correct answer <---------- */
    $('#ans1').parent().on('click', function () {
      
      $('#jumbotron').fadeOut(1000).fadeIn(1000);
      $("#quiz").append(questionDiv).fadeIn(3000);
      $("<p>").html(ourQuestions[0].question)
        $('#score-up').fadeIn(1000)  
        $('#up').text("Correct: ");
        $('#up').fadeIn(1000) 
      var number = parseInt($('#score-up').text());
        number += 1;
        $('#score-up').text(number);
        var number = parseInt($('#questions-left').text());
        number -= 1;
        $('#questions-left').text(number);
        queryURL('update');
        forceUpdate()


    });

    /* ---------> incorrect answer <---------- */
    $('#ans2').parent().on('click', function () {
        var number = parseInt($('#down').text());
        number += 1;
        $('#down').text(number).fadeIn(3000);
        $('#wr').text("Wrong: ");
        $("#ans2").parent().fadeOut(900)
        $('#wr').fadeIn(1000)     /* ---> brings in the wrong answers counter <--- */
        $('#down').fadeIn(1000)     /* ---> brings in the wrong answers counter <--- */
        

    });


    /* ---------> incorrect answer <---------- */
    $('#ans3').parent().on('click', function () {
        var number = parseInt($('#down').text());
        number += 1;
        $('#down').text(number).fadeIn(3000);
        $('#wr').text("Wrong: ");
        $('#ans3').parent().fadeOut(900)
        $('#wr').fadeIn(1000)     /* ---> brings in the wrong answers counter <--- */
        $('#down').fadeIn(1000)     /* ---> brings in the wrong answers counter <--- */
    });


    /* ---------> incorrect answer <---------- */
    $('#ans4').parent().on('click', function () {
        var number = parseInt($('#down').text());
        number += 1;
        $('#down').text(number).fadeIn(3000);
        $('#wr').text("Wrong: ");
        $('#ans4').parent().fadeOut(900)
        $('#wr').fadeIn(1000)     /* ---> brings in the wrong answers counter <--- */
        $('#down').fadeIn(1000)     /* ---> brings in the wrong answers counter <--- */
    });

    /* ---> allows for random order of answers <--- */
    var ul = document.querySelector('ul');
    for (var i = ul.children.length; i >= 0; i++) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
});
    /* ---> balances width of the buttons <--- */
var choices = document.querySelectorAll('.btn');
var maxWidth = 0;
for (i = 0; i < choices.length; ++i) {
    maxWidth = Math.max(maxWidth, choices[i].offsetWidth)
};
for (i = 0; i < choices.length; ++i) {
    choices[i].style.width = minWidth + "px";

    $(".bd").click(function () {
      if ($("#execute").hasClass("active")) {
          $(".promoOut").slideDown("slow", function () {
              $(".promoOut").show();
              $(".promoOut").removeClass("active");
          });
      } else {
          $(".promoOut").slideUp("slow", function () {
              $(".promoOut").hide();
             
              $(".promoOut").addClass("active");
          });
      }
      function toggleDisplay(d,b){
          var c=document.getElementById(d);
          if(c.style.display=="block"){
              c.style.display="none";
              if(b){b.innerHTML="Read more..."}}
              else{c.style.display="block";
              if(b){b.innerHTML="Fold in..."}}};
  });

};

  

$( document ).ready         ( function () {
    console.log( "ready!" );
    /* ----------------> below is how the  game is formatted on load <------------------ */
    $       ( '#ans1'     ) .parent () .hide ()
    $       ( '#ans2'     ) .parent () .hide ()
    $       ( '#ans3'     ) .parent () .hide ()
    $       ( '#ans4'     ) .parent () .hide ()
    $       ( '#quiz'     ) .hide ()
    $       ( '#up'       ) .hide ()
    $       ( '#down'     ) .hide ()
    $       ( '#wr'       ) .hide ()
    $       ( '#ql'       ) .hide ()
    $       ( '#score-up' ) .hide ()
    /* ---------------->above is how the  game is formatted on load <------------------ */
});



var         queryURL = "https://opentdb.com/api.php?amount=10&type=multiple";
console.log( 'queryURL', queryURL );

                                // gets the api call for me
$       .ajax({
            url: queryURL,
            method: "GET"

                               // then it does this
}).then(function (response) {
let         res = response.results;
let         yep = correct_answer;

var questionList = [
            [ res[0]         ]
            [ res[1]         ]
            [ res[2]         ]
            [ res[3]         ]
            [ res[4]         ]
            [ res[5]         ]
            [ res[6]         ]
            [ res[7]         ]
            [ res[8]         ]
            [ res[9]         ]
]
var theGoodAnswer = [
            [ res[0].yep     ]
            [ res[1].yep     ]
            [ res[2].yep     ]
            [ res[3].yep     ]
            [ res[4].yep     ]
            [ res[5].yep     ]
            [ res[6].yep     ]
            [ res[7].yep     ]
            [ res[8].yep     ]
            [ res[9].yep     ]
]

var wrongAnswer1 = [
            [ res[0].nope[0] ]
            [ res[1].nope[0] ]
            [ res[2].nope[0] ]
            [ res[3].nope[0] ]
            [ res[4].nope[0] ]
            [ res[5].nope[0] ]
            [ res[6].nope[0] ]
            [ res[7].nope[0] ]
            [ res[8].nope[0] ]
            [ res[9].nope[0] ]
]

var wrongAnswer2 = [
            [ res[0].nope[1] ]
            [ res[1].nope[1] ]
            [ res[2].nope[1] ]
            [ res[3].nope[1] ]
            [ res[4].nope[1] ]
            [ res[5].nope[1] ]
            [ res[6].nope[1] ]
            [ res[7].nope[1] ]
            [ res[8].nope[1] ]
            [ res[9].nope[1] ]
]

var wrongAnswer3 = [
            [ res[0].nope[2] ]
            [ res[1].nope[2] ]
            [ res[2].nope[2] ]
            [ res[3].nope[2] ]
            [ res[4].nope[2] ]
            [ res[5].nope[2] ]
            [ res[6].nope[2] ]
            [ res[7].nope[2] ]
            [ res[8].nope[2] ]
            [ res[9].nope[2] ]
]
    var     ourQuestions = res;
    var     QuestionsLeft = 10;
    var     questionDiv = $("<div>");
    var     p = $("<p>").html(ourQuestions[0].question);
    $       (questionDiv).append(p);
    $       ("#quiz").append(questionDiv);

});
                                /* Timeing Variables */
    var     initial = 10000;
    var     count = initial;
    var     counter = 10;      //10 will  run it every 100th of a second
    var     initialMillis;
    var     decimals = 2;
    var     gameOver = 0;
                               /* timing variables end */
                                //this variable tells the below nextElement function to only move one comma at a time on command
    var     index =
            answer = 1
            answer1 = 1
            answer2 = 1
            answer3 = 1
            answer4 = 1

        
                                // this is how the questions load to the game on start


    var     questionList  = document.getElementById  ( 'quiz'                       );
    var     theGoodAnswer = document.getElementById  ( 'ans1'                       );
    var     wrongAnswer1  = document.getElementById  ( 'ans2'                       );
    var     wrongAnswer2  = document.getElementById  ( 'ans3'                       );
    var     wrongAnswer3  = document.getElementById  ( 'ans4'                       );


            quiz.innerHTML = questionList [ 0 ]; //Print first value of array right away.
            ans1.innerHTML = theGoodAnswer[ 0 ]; //Print first value of array right away.
            ans2.innerHTML = wrongAnswer1 [ 0 ]; //Print first value of array right away.
            ans3.innerHTML = wrongAnswer2 [ 0 ]; //Print first value of array right away.
            ans4.innerHTML = wrongAnswer3 [ 0 ]; //Print first value of array right away.
function nextElement() {
            quiz.innerHTML = questionList [  index.answer                           ];
            ans1.innerHTML = theGoodAnswer[  index.answer1                          ];
            ans2.innerHTML = wrongAnswer1 [  index.answer2                          ];
            ans3.innerHTML = wrongAnswer2 [  index.answer3                          ];
            ans4.innerHTML = wrongAnswer3 [  index.answer4                          ];
// 
            index.answer =  ( index.answer + 1  ) % ( questionList.length           );
            index.answer1 = ( index.answer1 + 1 ) % ( theGoodAnswer.length          );
            index.answer2 = ( index.answer2 + 1 ) % ( wrongAnswer1.wrongAnswer1     );
            index.answer3 = ( index.answer3 + 1 ) % ( wrongAnswer2.wrongAnswer1     );
            index.answer4 = ( index.answer4 + 1 ) % ( wrongAnswer3.wrongAnswer1     );
}
/* ---------> sends answers to id in DOM <---------- */
$           ( "#quiz" ) .append ( questionList                                      );
$           ( "#ans1" ) .append ( theGoodAnswer                                     );
$           ( "#ans2" ) .append ( wrongAnswer1                                      );
$           ( "#ans3" ) .append ( wrongAnswer2                                      );
$           ( "#ans4" ) .append ( wrongAnswer3                                      );
/* ---------> timer begin <---------- */
function                timer   (                                                   ) { 
    if (                --count < 0                                                 ) {
                        stopTimer               (                                   );
    }
    var                 current = Date.now      (                                   )
    count = count -    ( current - initialMillis                                    );
    initialMillis = current;
    displayCount       ( count                                                      );
    console.log        ( 'displayCount', displayCount                               ); 
}
function displayCount  ( count                                                      ){                  /* ---> sends the timer to the screen <--- */
    var 
    res = count / 1000; /* ---> the timing ofr each interval of time change <--- */
    document.getElementById         ( "timer"                                       ) 
    .innerHTML = res.toPrecision    ( count.toString () . length - (4 - decimals )  );
}
/* ---------> on click funcitions begin <---------- */
$( '#start' ) .on ( 'click', function   (                                           ){                      /* ---> action to start game <--- */
    $       ( this    ) .parent () .hide   (                                        )                   /* ---> hides the start button <--- */
    $       ( '#ans1' ).parent  () .fadeIn ( 1000                                   )                   /* ---> brings in answer 1 <--- */
    $       ( '#ans2' ).parent  () .fadeIn ( 1200                                   )                   /* ---> brings in answer 2 <--- */
    $       ( '#ans3' ).parent  () .fadeIn ( 1400                                   )                   /* ---> brings in answer 3 <--- */
    $       ( '#ans4' ).parent  () .fadeIn ( 1600                                   )                   /* ---> brings in answer 4 <--- */
    $       ( '#quiz' ).fadeIn  (            1800                                   )                   /* ---> brings in the question to be answered <--- */
    $       ( '#ql'   ).fadeIn  (            1000                                   )                   /* ---> brings in the questions left counter <--- */
    initialMillis = Date.now    (                                                   );
    counter = setInterval       ( timer, counter                                    )
    $       ( 'body' ) .html ( epicBackground     ) .fadeIn ( 1800                  )
});
            /* ---------> correct answer <---------- */
$ ( '#ans1' ) .parent () .on ( 'click', function () {

    $       ( '#jumbotron'      ) .fadeOut ( 1000 ) .fadeIn ( 1000                  );
    $       ( '#score-up'       ) .fadeIn  ( 1000                                   )
    $       ('#up'              ) .text    ("Correct:"                              );
    $       ( '#up'             ) .fadeIn  ( 1000                                   )
    var     number = parseInt              ( $ ( '#score-up' ) .text ()             );
            number += 1;
    $       ( '#score-up'       ) .text    ( number );
    var     number = parseInt              ( $ ( '#questions-left' ) .text ()       );
            number -= 1;
    $       ( '#questions-left' ) .text ( number );
});
            /* ---------> incorrect answer <---------- */
$( '#ans2' )           .parent  () .on ( 'click', function ()                        {
    var     number  =  parseInt ( $    ( '#down' ) .text   ()                       );
            number +=  1;
    $(      '#down'  ) .text           (  number ) .fadeIn ( 3000                   );
    $(      '#wr'    ) .text           (  "Wrong: "                                 );
    $(      "#ans2"  ) .parent         () .fadeOut (         900                    )
    $(      '#wr'    ) .fadeIn         ( 1000 )                                                         /* ---> brings in the wrong answers counter <--- */
    $(      '#down'  ) .fadeIn         ( 1000 )                                                         /* ---> brings in the wrong answers counter <--- */
});
            /* ---------> incorrect answer <---------- */
$ ( '#ans3' ) .parent () .on ( 'click' , function ()                                {
    var     number = parseInt ( $ ( '#down' ) .text ()                              );
            number += 1;
    $(      '#down' ) .text   (  number ) .fadeIn (  3000                           );
    $(      '#wr'   ) .text   (  "Wrong: "                                          );
    $(      '#ans3' ) .parent () .fadeOut          ( 900                            )  
    $(      '#wr'   ) .fadeIn (                      1000                           )                   /* ---> brings in the wrong answers counter <--- */
    $(      '#down' ) .fadeIn (                      1000                           )                   /* ---> brings in the wrong answers counter <--- */
});
            /* ---------> incorrect answer <---------- */
$( '#ans4'     ) .parent () .on ( 'click', function ()                              {
    var           number = parseInt ( $ ( '#down' ) .text ()                        );
                  number += 1;
    $(       '#down' ) .text   ( number     ) .fadeIn ( 3000                        );
    $(       '#wr'   ) .text   ( "Wrong: "                                          );
    $(       '#ans4' ) .parent () .fadeOut (             900                        )
    $(       '#wr'   ) .fadeIn (                        1000                        )                     /* ---> brings in the wrong answers counter <--- */
    $(       '#down' ) .fadeIn ( 1000                                               )                     /* ---> brings in the wrong answers counter <--- */
});
             /* ---> allows for random order of answers <--- */
var           options = document.querySelector ( '#options'                         );
for (         var i = options.children.length ; i >= 0; i++                         ){
              options.appendChild ( options.children [ Math.random () * i | 0 ]     );
                                                                                    }
             /* ---> balances width of the buttons <--- */
var          choices = document.querySelectorAll ( '.btn'                           );
var          maxWidth = 0;
for (        i = 0; i < choices.length; ++i                                         ){
             maxWidth = Math.max ( maxWidth ,  choices [ i ] .offsetWidth           )
                                                                                    };
for (        i = 0; i < choices.length; ++i                                         ){
             choices [ i ] .style.width = minWidth;
                                                                                    };

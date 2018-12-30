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

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXX interactive background begin XXXXXXXXXXXXXXXXXXXX */
    function epicBackground(count) {     


        acc_strength = 2;
        pull_strength = 0.02;
        stick_distance = 90000;
        cursor_stick_distance = 200000;
        zIndex = -2;
        opacity = 0.3;
        line_color = "";
        count = 55;
        
        ! function() {
          // Encapsulate the method after compression to reduce the file size
          function get_attribute(node, attr, default_value) {
            return node.getAttribute(attr) || default_value;
          }
          // Encapsulates the method, and reduces the file size after compression
          function get_by_tagname(name) {
            return document.getElementsByTagName(name);
          }
          // Get configuration parameters
          function get_config_option() {
            var scripts = get_by_tagname("script"),
              script_len = scripts.length,
              script = scripts[script_len - 1]; // The currently loaded script
            return {
              l: script_len, // Length, used to generate id
              z: get_attribute(script, "zIndex", zIndex), // z-index
              o: get_attribute(script, "opacity", opacity), // opacity
              c: get_attribute(script, "color", line_color), // color
              n: get_attribute(script, "count", count) // count
            };
          }
          // Set the width of the canvas
          function set_canvas_size() {
            canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
            canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          }
        
          // Drawing process
          function draw_canvas() {
            context.clearRect(0, 0, canvas_width, canvas_height);
            // Random lines and the current position of the union array
            var e, i, d, x_dist, y_dist, dist; // Temporary node
            // Traverse handles every point
            random_points.forEach(function(r, idx) {
              r.x += r.xa, 
              r.y += r.ya, // mobile
              r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1, 
              r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1, // Hit the border, reverse rebound
              context.fillRect(r.x - 0.5, r.y - 0.9, 0, 0); // Draw a point with a width of .72
              // Starting from the next point
              for (i = idx + 1; i < all_array.length; i++) {
                e = all_array[i];
                // The current point exists
                if (null !== e.x && null !== e.y) {
                  x_dist = r.x - e.x; // X axis distance l
                  y_dist = r.y - e.y; // Y axis distance n
                  dist = x_dist * x_dist + y_dist * y_dist; // Total distance, m
        
                  dist < e.max && (e === current_point && dist >= e.max / 2 && (r.x -= pull_strength * x_dist, r.y -= pull_strength * y_dist), // Close to the time to accelerate
                    d = (e.max - dist) / e.max,
                    context.beginPath(),
                    context.lineWidth = d / 2,
                    context.strokeStyle = "rgba(" + config.c + "," + (d + 0.2) + ")",
                    context.moveTo(r.x, r.y),
                    context.lineTo(e.x, e.y),
                    context.stroke());
                }
              }
            }), frame_func(draw_canvas);
          }
          // Create a canvas and add it to the body
          var the_canvas = document.createElement("canvas"), // Canvas
            config = get_config_option(), // Configuration
            canvas_id = "c_n" + config.l, // Canvas id
            context = the_canvas.getContext("2d"), canvas_width, canvas_height, 
            frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) {
              window.setTimeout(func, 100 / 45);
            }, random = Math.random, 
            current_point = {
              x: null, // Current mouse x
              y: null, // Current mouse y
              max: cursor_stick_distance // The square of the radius of the circle
            },
            all_array;
          the_canvas.id = canvas_id;
          the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
          get_by_tagname("body")[0].appendChild(the_canvas);
        
          // Initialize the canvas size
          set_canvas_size();
          window.onresize = set_canvas_size;
          // When the mouse position storage, leave the time, release the current location information
          window.onmousemove = function(e) {
            e = e || window.event;
            current_point.x = e.clientX;
            current_point.y = e.clientY;
          }, window.onmouseout = function() {
            current_point.x = null;
            current_point.y = null;
          };
          // Randomly generate config.n line location information
          for (var random_points = [], i = 0; config.n > i; i++) {
            var x = random() * canvas_width, // Random location
              y = random() * canvas_height,
              xa = acc_strength * random() - acc_strength / 2, // Random movement direction
              ya = acc_strength * random() - acc_strength / 2;
            // Random point
            random_points.push({
              x: --x,
              y: --y,
              xa: --xa,
              ya: --ya,
                x: ++x,
              y: ++y,
              xa: ++xa,
              ya: ++ya,
              max: stick_distance // Sticking distance
            });
          }
          all_array = random_points.concat([current_point]);
          // 0.1 seconds after drawing
          setTimeout(function() {
            draw_canvas();
          }, 100);
        }();
        
    }
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXX interactive background END XXXXXXXXXXXXXXXXXXXX */

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
    var gameOver = 0;
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
        initialMillis = Date.now();    
        counter = setInterval(timer, counter) 
        $('body').html(epicBackground).fadeIn(1800) 
    });

/* ---------> correct answer <---------- */
    $('#ans1').parent().on('click', function () {

        $.get( "https://opentdb.com/api.php?amount=1&type=multiple", function () {
            $( ".quiz" ).get( questionDiv );
            $( ".ans1" ).get( corrAns );
            $( ".ans2" ).get( incorrAns );
            $( ".ans3" ).get( incorrAns1 );
            $( ".ans4" ).get( incorrAns2 );
            alert( "next question" );
          });

      $('#jumbotron').fadeOut(1000).fadeIn(1000);
    //   $("#quiz").append(questionDiv).fadeIn(3000);
    //   $("<p>").html(ourQuestions[0].question)
        $('#score-up').fadeIn(1000)  
        $('#up').text("Correct: ");
        $('#up').fadeIn(1000) 
      var number = parseInt($('#score-up').text());
        number += 1;
        $('#score-up').text(number);
        var number = parseInt($('#questions-left').text());
        number -= 1;
        $('#questions-left').text(number);
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
    choices[i].style.width = minWidth ;

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


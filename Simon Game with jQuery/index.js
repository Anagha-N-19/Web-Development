var buttonColours = ["red", "blue","green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

started = false;    
var level = 0;

$(document).keydown(function(){
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
    }
})

function startover(){
    level = 0;
    started = false;
    gamePattern = [];
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        
        $("h1").text("Game Over, Press Any Key to Restart");
        startover();
    }
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColour).removeClass('pressed');
}, 100);
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function nextSequence(){
    level++;
    $("h1").text("Level "+level);
    userClickedPattern = [];

    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    console.log(gamePattern);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    
}





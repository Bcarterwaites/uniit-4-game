$(document).ready(function() {

var randomResult;
var losses = 0;
var wins = 0;
var previousResult = 0;



var start = function() {
    $(".crystals").empty();


    var images = [
        "assets/images/Finn_the_Human.png",
        "assets/images/Fern_Render.png",
        "assets//images/JaketheDog.png",
        "assets/images/The_Lich_King.png"
    ]
    randomResult = Math.floor(Math.random() * 100) + 19
    $("#result").html('Random Result: ' + randomResult)

for (var i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random() * 11) + 1
    
    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": randomNumber
        });
        crystal.css({ 
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });
    
    $(".crystals").append(crystal)
}
$("#currentnumber").html('Score :' + previousResult)
}

//audio
var zow = new Audio("assets/audio/Shmowzow.mp3")
var gob = new Audio("assets/audio/Ohmygob.mp3")

start();


$(document).on("click", ".crystal", function() {
    var num = parseInt($(this).attr("data-random"))
    
   previousResult += num;
    $("#currentnumber").html('Score :' + previousResult)
    
    
    if (previousResult > randomResult) {
        alert("You Lose")
        gob.play()
        console.log(gob)
        losses++;
        $("#losses").html('Losses: ' + losses)

        previousResult= 0;
        start();

    } else if(previousResult === randomResult) {
        alert("You Win!")
        wins++;
        zow.play()
        console.log(wins)

        $("#wins").html('Wins: ' + wins);

        previousResult = 0;
        start();

    }
})});
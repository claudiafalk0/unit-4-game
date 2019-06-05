//create variables to track
var wins = 0;
var losses = 0;
var Goal;
var Score;
var fruitValue;
// var imagesArray = [];
// imagesArray[0] = new Image();
// imagesArray[0].src = "assets/images/apple.jpg"
// imagesArray[1] = new Image();
// imagesArray[1].src = "assets/images/banana.jpg"
// imagesArray[2] = new Image();
// imagesArray[2].src = "assets/images/lemon.jpg"
// imagesArray[3] = new Image();
// imagesArray[3].src = "assets/images/cherries.jpg"

//wins
//losses
//Goal for the round (random number)
//Score
// Value of each crystal

//create a function to start/reset game
//Reset score to 0
//Update score on the page

function resetGame(){
    //create a new random number between 19 and 120
    //Update this on the page
    Goal = [Math.floor(Math.random() * 101) + 19];
    $("#ComputerNumber").text(Goal);
    console.log(Goal);
    //create new values for each crystal between 1 and 12
    // fruitValue = [Math.floor(Math.random()*12)+1];
    
    //Assign each value to a crystal
    $(".fruit").each(function() {
        fruitValue = Math.floor(Math.random() * 12) + 1;
        $(this).attr("data-fruitvalue", fruitValue);
    });

    Score = 0
}

resetGame();

//create a click event 
$(".fruit").on("click", function (){
    //Grab the value of the crystal clicked
    //Add that to the player's score
    //Test for win/loss
    Score += parseInt($(this).attr("data-fruitvalue"));
    console.log($(this).attr("data-fruitvalue"));
    $("#userNumber").text(Score);
    console.log($(this).attr("id"));
    
    //Update wins on the page
    //Create a function to test win/lose
    //If score === goal
    //wins++
    //call reset function
    if(Score === Goal){
        wins++;
        resetGame();
        //Update losses on the page
        //If score > goal
        //losses++
        //call reset function
    } else if (Score > Goal){
        losses++;
        resetGame();
    }
})

        //If score === goal
            //wins++
            //call reset function
        //If score > goal
            //losses++
            //call reset function
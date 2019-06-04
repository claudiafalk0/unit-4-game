//create variables to track
var wins = 0;
var losses = 0;
var Goal;
//var Score;
//var fruitValue;

//wins
//losses
//Goal for the round (random number)
//Score
// Value of each crystal

//create a function to start/reset game
function resetGame(){
    Goal = Math.floor(Math.random()*120)+19;
    console.log(Goal);
}
    //create a new random number between 19 and 120
    //Update this on the page
    //create new values for each crystal between 1 and 12
    //Assign each value to a crystal
    //Update losses on the page
    //Update wins on the page
    //Reset score to 0
    //Update score on the page

//Create a function to test win/lose
    //If score === goal
         //wins++
         //call reset function
    //If score > goal
         //losses++
         //call reset function

//create a click event 
    //Grab the value of the crystal clicked
    //Add that to the player's score
    //Test for win/loss
        //If score === goal
            //wins++
            //call reset function
        //If score > goal
            //losses++
            //call reset function
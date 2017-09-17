//Refers to buttons
var p1Button = document.querySelector("#player1");
var p2button = document.querySelector("#player2");
var resetScore = document.querySelector("#reset");

//Refers to the scores displayed
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;

//Refers to the input box to set the playing number score
var numInput = document.querySelector("input[type = 'number']");
var playingNum = document.querySelector("#playingNum");

//The game is not over by default
var gameOver = false;
var winningScore = 5;


//Player one increment button
p1Button.addEventListener("click", function(){
  //if gameOver is not set to true, the score will continue to increment
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

//Player two increment button
p2button.addEventListener("click", function() {
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

});

//Changes the "playing to:" number by changing the input box
numInput.addEventListener("change", function(){
  playingNum.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

//When clicked, the scores are reset to 0, and the "winner" class is removed
resetScore.addEventListener("click", function() {
  reset();
});

//Resets the game
function reset() {
  p1Score = 0;
  p1Display.textContent = p1Score;
  p1Display.classList.remove("winner");

  p2Score = 0;
  p2Display.textContent = p2Score;
  p2Display.classList.remove("winner");

  gameOver = false;
}

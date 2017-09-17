var p1Button = document.querySelector("#player1");
var p2button = document.querySelector("#player2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

var resetScore = document.querySelector("#reset");



p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore) {
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2button.addEventListener("click", function() {
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

});

resetScore.addEventListener("click", function() {
  p1Score = 0;
  p1Display.textContent = p1Score;

  p2Score = 0;
  p2Display.textContent = p2Score;
});

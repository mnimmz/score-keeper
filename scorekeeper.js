var p1Button = document.querySelector("#player1");
var p2button = document.querySelector("#player2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;


p1Button.addEventListener("click", function(){
    p1Score++;
    console.log(p1Score);
    p1Display.textContent = p1Score;
});

p2button.addEventListener("click", function() {
  p2Score++;
  p2Display.textContent = p2Score;
});

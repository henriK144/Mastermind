document.getElementById("paragraph1").style.fontSize = "25px"; // May be removed later

document.getElementById("gameColumns").style.display = "none";
document.getElementById("guessLayers").style.display = "none";
for (let i = 1; i <= 12; i++) {
  document.getElementById("guessLayer"+i).style.display = "none";
}
document.getElementById("win").style.display = "none";
document.getElementById("lose").style.display = "none";


const letters = ["A","B","C","D","E","F"];
let playerName = "Eve Edison";
let turn, gameActive;
turn = 0; // To indicate that the game has not yet begun.
gameActive = false;

const currentCode = ["A","B","C","D"];
const currentGuess = ["A","A","A","A"];
const gameIcons = ["✖","✔","✅"];

function endGame() {
  location.reload();
}

function startGame() {
  document.getElementById("introParagraphs").style.display = "none";
  document.getElementById("introText").style.display = "none";
  document.getElementById("titleDisplay").style.display = "none";
  document.getElementById("startButton").style.display = "none";

  for (let i = 0; i <= 3; i++) {
    currentCode[i] = letters[Math.floor(Math.random() * 6)];
  }

  console.log("The secret code has been generated.");
  console.log(currentCode);
  gameActive = true;
  turn = 1;

  document.getElementById("gameColumns").style.display = "block";
  document.getElementById("guessLayers").style.display = "block";

  document.getElementById("guessLayer"+turn).style.display = "block";
}

function generateFeedback (guess, code) {
  var feedbackString = "";
  const feedbackArray = [0, 0, 0];

  for (let i = 0; i <= 3; i++) {
    if (guess[i] == code[i]) {
      feedbackArray[2]++; 
    } else if (code.includes(guess[i])) {
      feedbackArray[1]++;
    } else {
      feedbackArray[0]++;
    }  
  }

  for (let i = 0; i <= 2; i++) {
    for (let j = 1; j <= feedbackArray[i]; j++) {
      feedbackString += gameIcons[i];
    }
  }

  return feedbackString;
}

function nextTurn() {
  if (gameActive) {
    for (let i = 1; i <= 4; i++) {
    currentGuess[i-1] = document.getElementById("layer"+turn+"Box"+i).value;
  }
  console.log(generateFeedback(currentGuess, currentCode)); 
  var fb = document.createTextNode(generateFeedback(currentGuess, currentCode));
  document.getElementById("feedback"+turn).appendChild(fb);

  if (turn == 12) {
    if (currentGuess[0] == currentCode[0] && currentGuess[1] == currentCode[1] && currentGuess[2] == currentCode[2] && currentGuess[3] == currentCode[3]) {
      console.log("You win!");
      document.getElementById("win").style.display = "block";
      gameActive = false;
    } else {
      console.log("You lose."); 
      document.getElementById("lose").style.display = "block";
      gameActive = false;
    }
  } else {
    if (currentGuess[0] == currentCode[0] && currentGuess[1] == currentCode[1] && currentGuess[2] == currentCode[2] && currentGuess[3] == currentCode[3]) {
      console.log("You win!"); 
      document.getElementById("win").style.display = "block";
      gameActive = false;
    } else {
      document.getElementById("enterButton"+turn).style.display = "none";
      turn++;
      document.getElementById("guessLayer"+turn).style.display = "block";
    }
  }
  }

  

  

}

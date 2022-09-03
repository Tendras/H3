const root = Math.SQRT2;
function diagonal(length) {
  console.log("diagonal of the square is: " + length * root);
}

let l1 = 5;
let l2 = 6;
let l3 = 7;
function trinagleArea(l1, l2, l3) {
  let semiper = (l1 + l2 + l3) / 2;
  console.log(
    "area of the trinagle is: " +
      Math.sqrt(semiper * (semiper - l1) * (semiper - l2) * (semiper - l3))
  );
}

function circle(radius) {
  console.log("The circumference of the circle is: " + 2 * Math.PI * radius);
  console.log(
    "The surface area of the circle is: " + Math.PI * radius * radius
  );
}

function larger(x, y) {
  if (x > y) {
    console.log(x + " is bigger");
  } else if (y > x) {
    console.log(y + " is bigger");
  } else {
    console.log("they are both equal");
  }
}

function checkParity(x) {
  if (x % 2 === 1) {
    console.log(x + " is an odd number");
  } else {
    console.log(x + " is an even number");
  }
}

function computerPlay() {
  const random = Math.floor(Math.random() * 3 + 1);
  const optionsArr = ["Rock", "Paper", "Scisors"];
  return optionsArr[random - 1];
}
let playerScore = 0;
let computerScore = 0;
function playRound(computerSelection, playerSelection) {
  if ((computerSelection == "Rock") & (playerSelection == "Paper")) {
    console.log("you win");
    playerScore++;
  } else if ((computerSelection == "Rock") & (playerSelection == "Rock")) {
    console.log("tie . both teams get 1 point");
    computerScore++;
    playerScore++;
  } else if ((computerSelection == "Rock") & (playerSelection == "Scisors")) {
    console.log("you lose");
    computerScore++;
  } else if ((computerSelection == "Paper") & (playerSelection == "Paper")) {
    console.log("tie . both teams get 1 point");
    computerScore++;
    playerScore++;
  } else if ((computerSelection == "Paper") & (playerSelection == "Rock")) {
    console.log("you lose");
    computerScore++;
  } else if ((computerSelection == "Paper") & (playerSelection == "Scisors")) {
    console.log("you win");
    playerScore++;
  } else if ((computerSelection == "Scisors") & (playerSelection == "Paper")) {
    console.log("you lose");
    computerScore++;
  } else if ((computerSelection == "Scisors") & (playerSelection == "Rock")) {
    console.log("you win");
    playerScore++;
  } else if (
    (computerSelection == "Scisors") &
    (playerSelection == "Scisors")
  ) {
    console.log("tie . both teams get 1 point");
    playerScore++;
    computerScore++;
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    let computerSelection = computerPlay();

    let playerSelection = prompt(
      "Playing 'Rock Paper Scisors' pick your poison"
    );
    playRound(computerSelection, playerSelection);
  }

  if (playerScore > computerScore) {
    console.log(
      "Final winner is the Player: " + playerScore + " to " + computerScore
    );
  } else if (playerScore < computerScore) {
    console.log(
      "Final winner is the Computer: " + computerScore + " to " + playerScore
    );
  } else {
    console.log("Its a tie: " + playerScore + " to " + computerScore);
  }
}
//diagonal(9);
//trinagleArea(l1, l2, l3);
//circle(4);
game();

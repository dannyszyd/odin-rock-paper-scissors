// 1.Write func 'computerPlay' which randomly returns R-P-S
const rps = ["rock", "paper", "scissors"]

function computerPlay() {
  return rps[Math.floor(Math.random()*rps.length)];
}

// 2. Write func that plays 1 round of R-P-S and
// a) takes two parameters: playerSelection , computerSelection and:
// b) returns string that declares winner of round like: 
//"You Lose! Paper > Rock"

let prePlayerSelection = prompt("Choose: Rock, Paper, Scissors?");
const playerSelection = prePlayerSelection.toString().toLowerCase(); //toString() converts the array^ from object to a string only then can it be used with .toLowerCase()
const computerSelection = computerPlay();

function singleRound(playerSelection , computerSelection) {
  if (playerSelection === computerSelection){
    return "Tie Round!";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
             (playerSelection === "paper" && computerSelection === "rock") || 
             (playerSelection === "scissors" && computerSelection === "paper")) {
      return "You Won the Round!";
  } else if ((computerSelection === "rock" && playerSelection === "scissors") || 
             (computerSelection === "paper" && playerSelection === "rock") || 
             (computerSelection === "scissors" && playerSelection === "paper")) {
      return "You Lose. Comp Won the Round :[";
  }
}

//Checklist:
// [DONE] need to make sure playerSelection parameter is case-sensitive (already tried but not working well)
// [DONE] change console.logs to returns ^
//refer to T.O.P project page for more
console.log (singleRound(playerSelection , computerSelection));
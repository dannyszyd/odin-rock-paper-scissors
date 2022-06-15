// Danny's T.O.P Rock-Paper-Scissors Project Javascript code!

// [DONE] means task is completed, refer to additional Proj Notes at bottom!

// [DONE] 1.Write func 'computerPlay' which randomly returns R-P-S

function computerPlay() {
  const rps = ["rock", "paper", "scissors"] //(6/13/22) moved rps const from global scope into computerPlay() func scope!
  return rps[Math.floor(Math.random()*rps.length)];
}

// [DONE] 2. Write func that plays 1 round of R-P-S and
// [DONE] a) takes two parameters: playerSelection , computerSelection and:
// [DONE] b) returns string that declares winner of round like: "You Lose! Paper > Rock"

function singleRound(playerSelection , computerSelection) {
  
  if (playerSelection === computerSelection){
    return "Tie Round!";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
             (playerSelection === "paper" && computerSelection === "rock") || 
             (playerSelection === "scissors" && computerSelection === "paper")) {
      playerScore++;         
      return `You Won the Round! ${playerSelection} > ${computerSelection}`;
  } else if ((computerSelection === "rock" && playerSelection === "scissors") || 
             (computerSelection === "paper" && playerSelection === "rock") || 
             (computerSelection === "scissors" && playerSelection === "paper")) {
      compScore++;         
      return `You Lose. Comp Won the Round :[ ${computerSelection} > ${playerSelection}`;
  } else {
      return "Huh? Please input a valid response!"
  }
}

//const playerSelection = prompt("R, P OR S?");
//const computerSelection = computerPlay();


//[OLD REPLACED W/ NEW VERSION CHECK GAME()]let prePlayerSelection = prompt("Choose: Rock, Paper, Scissors?");
//[OLD REPLACED W/ NEW VERSION CHECK GAME()let playerSelection = prePlayerSelection.toLowerCase(); //toString() converts the array^ from object to a string only then can it be used with .toLowerCase() , also switched from const to let because player choice is never "constant"
//const computerSelection = computerPlay();
let playerScore = 0;
let compScore = 0;

// [DONE] 3. Write func game(). Call singleRound() inside of this to :
// [DONE] Play a 5 round game that keeps score and reports a winner or loser at the end of the round
// [DONE]  a) use for(let i = 0; i < 5; i++) {} to play those 5 rounds
// [DONE]  b) use console.log() to display results of:
// [DONE]   b1) each round and:
// b2) winner at the end

function game(){ //***IMPORTANT:***REFER TO BOTTOM NOTES FOR IMPORTANT ANALYSIS ON HOW U GOT IT TO WORK PROPER!!!!***
  for(let i = 0; i < 5; i++){
    const computerSelection = computerPlay();
    const playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
    console.log(singleRound(playerSelection , computerSelection));
    console.log("Your Score:" + playerScore);
    console.log("Comp Score:" + compScore);
  }
  
  if(playerScore > compScore) {
    console.log(`CONGRATS! YOU WON THE GAME! FINAL SCORE: ${playerScore}`);
  } else {
    console.log("SORRY :[ YOU LOSE THE GAME. TRY AGAIN!");
  }
}

game(); //< this is needed to call the game func and displays all game's console.log in console!



// [DONE] c) use prompt() to get input from user
// d) Re-work prev func if need be. Specifically you might want to:
// change the return value to something more useful
// e) OPTIONAL: create "helper" func if u think theyd be useful

//PROJECT NOTES:
// NOTE(6/14/22): can input whatever casing in options but result comes out as lowercase to do func. Try to make it first letter capitalized
/* [SOLVED!]NOTE(6/14/22): prompt pops up 6x times not 5 and it doesnt count first choice, only starts to count after 2nd input. FIX THIS! 
    think problem is somewhere in game(). It is not in:
      - console.log(singleRound(playerSelection,computerSelection); <---- [TESTED]
    think it has something to do wit the upper section of the code, might be easier/need to : rework playerSelection and prePlayerSelection var/const!!!!!*/


/*{{{FUNC game() ANALYSIS: 
Before the same result kept displaying for all 5 rounds because: it was just calling that same "singleround()" 5x, 
displaying the same result 5x. 

HOW WE GOT IT TO WORK: 
It was crucial to redeclare the "preplayerSelection" prompt() to get the prompt to appear 5x so that the player can input 
a different choice for every round if they want to! It was also crucial to redeclare the "playerSelection" var and 
"computerSelection" const in the for() loop of the "game()" func, on top of the three console.log()s. The logic 
behind this being that: redeclaring this var & const inside the loop calls a brand new different "singleRound()" func everytime for 5 different rounds. 

6/14/22 NEW ERROR: REFER TO SECOND PROJECT NOTE ABOUT PROMPT AND SCORE MANAGEMENT!

6/15/22 4:24pm: even by just leaving a var ex: let playerSelection = prompt(Choose: r,p or s?); it doesnt fix the issue of 6x prompt
  
  UPDATE!:4:37PM: WE GOT IT TO WORK!!!! How I got the prompt to show up 5x only and start counting from first choice:
    - Taking the declared const playerSelection = prompt(R,P or S?).LowerCase() and const computerSelection = computerplay() out of the global scope
    and only declaring it inside for() loop of the game() func scope!!! 
      QUESTION: How does this all work properly w/o needing to declare the const earlier? IDK but it works! Might be because game() mends everything 
        together after writing out all the proper var, func preceding it with everything else needed, declared within the game() func */
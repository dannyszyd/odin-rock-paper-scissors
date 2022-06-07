// 1.Write a function 'computerPlay' which randomly returns R-P-S
const rps = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  return rps[Math.floor(Math.random()*rps.length)];
}

console.log(computerPlay());
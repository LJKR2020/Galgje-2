const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  const WordSoFar = displayWordSoFar(word, guesses);
  console.log(WordSoFar);
  const letter = question("Raad een letter: ");

  const gameWon = isGameWon(word, guesses);
  if (gameWon) {
    console.log("Gefeliciteerd! Je hebt gewonnen ^_^");
  return
  }
  const gameLost = isGameLost(word, guesses);
  if (gameLost) {
    console.log("Helaas, je hebt verloren -.-'");
    return
  }

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);

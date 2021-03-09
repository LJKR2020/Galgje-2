function displayWordSoFar(word, guesses) {
  const letterArray = word.split("");
  let output = "";

  for (let i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    const letterGuessed = guesses.includes(letterInWord);
    if (!letterGuessed) {
      output = output + "_ ";
    }
    if (letterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  const letterArray = word.split("");
  let output = "";
  for (let i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    const letterGuessed = guesses.includes(letterInWord);
    if (!letterGuessed) {
      output = output + "_ ";
    }
    if (letterGuessed) {
      output = output + letterInWord;
    }
  }
  if (output === word) {
    return true;
  } else {
    return false
  }
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};

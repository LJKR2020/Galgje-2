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
  // console.log("Woord: ", word, "Guesses: ", guesses);
  const letterArray = word.split("");
  // console.log("letterArray: ", letterArray);
  let count = 0;
  // console.log("Counter =", count);
  // for (let i = 0; i < letterArray.length; i++) {
  //   if (!letterGuessed) {
  //     count = count + 1;
  //   }
  // console.log("Counter =" count);
  // }
  //   if (count = 7) {
  //     return true;
  //   } else {
  //     return false
  //   }
  for (let i = 0; i < guesses.length; i++) {
    if (guesses != letterArray) {count = count + 1}
    console.log(guesses, count)
  }
  if (count === 7) {
    return true;
  } else {return false
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};

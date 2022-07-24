const formGenerate = document.querySelector(".form__generate");
const inputGenerate = formGenerate.querySelector("input");

function oninputGenerate() {
    let rangeLimit = parseInt(inputGenerate.value, 10);
    let range = [...new Array(rangeLimit)].map((_, i) => i + 1);
    let numberGenerated = range[Math.floor(Math.random() * range.length)];
    localStorage.setItem("numberGenerated", numberGenerated);
  }

inputGenerate.addEventListener("blur", oninputGenerate);

const formGuess = document.querySelector(".form__guess");
const inputGuess = formGuess.querySelector("input");
const buttonGuess = formGuess.querySelector("#button");

function oninputGuess(tomato) {
  tomato.preventDefault();
  let resultWinloss = document.querySelector("#result__winloss");
  let resultNumber = document.querySelector("#result__number");
  let numberGenerated = localStorage.getItem("numberGenerated");
  numberGenerated =parseInt(numberGenerated, 10);
  let numberGuessed = parseInt(inputGuess.value, 10);

  if (numberGenerated === numberGuessed) {
    resultWinloss.textContent = "You Win!";
  } else {
    resultWinloss.textContent = "You Lost!";
  }

  resultNumber.textContent =
    "You chose " +
    String(numberGuessed) +
    " The machine chose " +
    String(numberGenerated);

  oninputGenerate();
}

buttonGuess.addEventListener("click", oninputGuess);

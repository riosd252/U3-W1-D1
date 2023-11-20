/*let saluto: string;
saluto = "Hello World!";

console.log(saluto);


let yearOfBirth: number;
yearOfBirth = 1997;

console.log(yearOfBirth);*/

const generateRand = () => {
  return Math.floor(Math.random() * (100 - 1) + 1);
};

const form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const player1NameInput = document.getElementById("player-1-name");
  const player2NameInput = document.getElementById("player-2-name");
  const player1ValueInput = document.getElementById("player-1");
  const player2ValueInput = document.getElementById("player-2");
  const resultDesc = document.getElementById("result-description");

  const result = document.getElementById("result");
  if (result) result.innerText = generateRand().toString();

  let player1Value: number;
  let player2Value: number;

  if (player1ValueInput) player1Value = parseInt(player1ValueInput.value);
  if (player2ValueInput) player2Value = parseInt(player2ValueInput.value);

  if (player1Value === parseInt(result.innerText)) {
    if (resultDesc)
      resultDesc.innerText = `${player1NameInput.value}'s bet was correct!`;
  } else if (player2Value === parseInt(result.innerText)) {
    if (resultDesc)
      resultDesc.innerText = `${player2NameInput.value}'s bet was correct!`;
  } else {
    if (resultDesc)
      resultDesc.innerText = `${player1NameInput.value}'s bet nor ${player2NameInput.value}'s was correct!`;
  }

  const resultContainer = document.getElementById("result-container");
  resultContainer?.classList.remove("d-none");

  const resetBtn = document.getElementById("reset");

  resetBtn?.addEventListener("click", () => {
    resultContainer?.classList.add("d-none");
  });
});

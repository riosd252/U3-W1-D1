/*let saluto: string;
saluto = "Hello World!";

console.log(saluto);


let yearOfBirth: number;
yearOfBirth = 1997;

console.log(yearOfBirth);*/
var generateRand = function () {
    return Math.floor(Math.random() * (100 - 1) + 1);
};
var form = document.getElementById("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var player1NameInput = document.getElementById("player-1-name");
    var player2NameInput = document.getElementById("player-2-name");
    var player1ValueInput = document.getElementById("player-1");
    var player2ValueInput = document.getElementById("player-2");
    var resultDesc = document.getElementById("result-description");
    var result = document.getElementById("result");
    if (result)
        result.innerText = generateRand().toString();
    var player1Value;
    var player2Value;
    if (player1ValueInput)
        player1Value = parseInt(player1ValueInput.value);
    if (player2ValueInput)
        player2Value = parseInt(player2ValueInput.value);
    if (player1Value === parseInt(result.innerText)) {
        if (resultDesc)
            resultDesc.innerText = "".concat(player1NameInput.value, "'s bet was correct!");
    }
    else if (player2Value === parseInt(result.innerText)) {
        if (resultDesc)
            resultDesc.innerText = "".concat(player2NameInput.value, "'s bet was correct!");
    }
    else {
        if (resultDesc)
            resultDesc.innerText = "".concat(player1NameInput.value, "'s bet nor ").concat(player2NameInput.value, "'s was correct!");
    }
    var resultContainer = document.getElementById("result-container");
    resultContainer === null || resultContainer === void 0 ? void 0 : resultContainer.classList.remove("d-none");
    var resetBtn = document.getElementById("reset");
    resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", function () {
        resultContainer === null || resultContainer === void 0 ? void 0 : resultContainer.classList.add("d-none");
    });
});

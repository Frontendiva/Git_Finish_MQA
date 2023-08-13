document.addEventListener("DOMContentLoaded", function () {
  const minInput = document.getElementById("minInput");
  const maxInput = document.getElementById("maxInput");
  const userInput = document.getElementById("userInput");
  const setRangeBtn = document.getElementById("setRange");
  const checkBtn = document.getElementById("check");
  const exitBtn = document.getElementById("exit");
  const rules = document.getElementById("rules");
  const error = document.getElementById("error");
  const result = document.getElementById("result");
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function displayMessage(message) {
  result.textContent = message;
}

let min, max, current, target, prevUser;

function startGame() {
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);

  if (min < 0 || max < 0 || min >= max) {
    error.textContent = "Вы ввели неверный диапазон";
    return;
  }

  target = generateRandomNumber(min, max);
  attemptsLeft = 5;

  rules.textContent = `Привет, я загадал число от ${min} до ${max}. Попробуй угадать его за 5 попыток!`;
  error.textContent = "";
  result.textContent = "";
}

function checkGuess() {
  current = parseInt(userInput.value);

  attemptsLeft--;

  if (current === target) {
    displayMessage(`Поздравляю! Ты угадал задуманное число за ${5 - attemptsLeft} попыток.`);
  } else {
    if (attemptsLeft < 4) {
      const distance = Math.abs(target - current);
      const prevDistance = Math.abs(target - prevUser);
      if (distance < prevDistance) {
        displayMessage(`Не угадал, но теплее!!! Осталось ${attemptsLeft} попыток.`);
      } else {
        displayMessage(`Не угадал, холоднее... Осталось ${attemptsLeft} попыток.`);
      }
    }
    prevUser = current;
  }
  if (attemptsLeft === 0) {
    displayMessage(`Увы, попытки закончились. Я загадал число ${target}.`);
  }
}

function exitGame() {
  rules.textContent = "Игра окончена.";
  error.textContent = "";
  result.textContent = "";
  minInput.value = "";
  maxInput.value = "";
  userInput.value = "";
}
  setRangeBtn.addEventListener("click", startGame);
  checkBtn.addEventListener("click", checkGuess);
  exitBtn.addEventListener("click", exitGame); 

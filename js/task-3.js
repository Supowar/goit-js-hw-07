// Отримуємо посилання на елементи input і span
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Додаємо обробник події input до елемента input
nameInput.addEventListener("input", function (event) {
  // Отримуємо поточне значення інпуту і очищаємо його від пробілів по краях
  const trimmedValue = event.target.value.trim();

  // Оновлюємо текст у span#name-output
  if (trimmedValue) {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});

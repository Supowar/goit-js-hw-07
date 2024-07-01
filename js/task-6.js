// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо елементи DOM
const controls = document.getElementById("controls");
const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищення попередньої колекції
  boxesContainer.innerHTML = "";

  // Створення нової колекції
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  // Додавання колекції до контейнера
  boxesContainer.appendChild(fragment);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Додавання обробника події на кнопку Create
createButton.addEventListener("click", () => {
  const amount = Number(input.value);

  // Валідація введеного значення
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // Очищення значення інпуту
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

// Додавання обробника події на кнопку Destroy
destroyButton.addEventListener("click", destroyBoxes);

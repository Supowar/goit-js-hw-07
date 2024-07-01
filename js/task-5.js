// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Додаємо обробник події DOMContentLoaded, щоб переконатися, що DOM повністю завантажений
document.addEventListener("DOMContentLoaded", () => {
  // Знаходимо кнопку та елемент span
  const changeColorButton = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  // Додаємо обробник події click до кнопки
  changeColorButton.addEventListener("click", () => {
    // Генеруємо випадковий колір
    const newColor = getRandomHexColor();

    // Змінюємо колір фону body
    document.body.style.backgroundColor = newColor;

    // Змінюємо текстове вмістення span на новий колір
    colorSpan.textContent = newColor;
  });
});

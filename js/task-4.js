document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function (event) {
    // Перешкоджаємо перезавантаженню сторінки
    event.preventDefault();

    // Отримуємо значення полів форми
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    // Перевіряємо, чи всі поля заповнені
    if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
    }

    // Створюємо об'єкт з даними форми
    const formData = {
      email: email,
      password: password,
    };

    // Виводимо об'єкт у консоль
    console.log(formData);

    // Очищаємо поля форми
    form.reset();
  });
});

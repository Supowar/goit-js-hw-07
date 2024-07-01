// Отримати список категорій
const categoriesList = document.querySelector("#categories");

// Отримати всі елементи з класом 'item' у списку категорій
const categoryItems = categoriesList.querySelectorAll(".item");

// Порахувати і вивести кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Перебрати всі елементи категорій
categoryItems.forEach((item) => {
  // Знайти і вивести текст заголовка
  const categoryTitle = item.querySelector("h2").textContent;
  // Знайти і вивести кількість вкладених елементів li
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});

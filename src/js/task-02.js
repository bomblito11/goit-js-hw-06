const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector("#ingredients");

ingredients.forEach((e) => {
  const newListItem = document.createElement(`li`);
  newListItem.textContent = e;
  newListItem.classList.add("item");
  container.appendChild(newListItem);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonForColorChange = document.querySelector("button.change-color");

buttonForColorChange.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();

  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector("span.color").textContent = randomColor;
});

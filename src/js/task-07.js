const inputElement = document.querySelector("#font-size-control");
const fontSizeToChange = document.querySelector("#text");
fontSizeToChange.style.fontSize = "56px";

inputElement.addEventListener("input", (event) => {
  fontSizeToChange.style.fontSize = `${inputElement.value}px`;
});

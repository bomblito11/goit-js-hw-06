const inputElement = document.querySelector("input#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", (event) => {
  if (event.target.value) {
    outputElement.textContent = event.target.value;
  } else {
    outputElement.textContent = "Anonymous";
  }
});

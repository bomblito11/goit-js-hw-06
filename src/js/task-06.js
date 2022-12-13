const inputElement = document.getElementById("validation-input");
const requiredDataLength = parseInt(inputElement.getAttribute("data-length"));

inputElement.addEventListener("blur", (event) => {
  const currentDataLength = event.target.value.length;

  if (requiredDataLength === currentDataLength) {
    inputElement.classList.add("valid");
    if (inputElement.classList.contains("invalid")) {
      inputElement.classList.remove("invalid");
    }
  } else {
    inputElement.classList.add("invalid");
    if (inputElement.classList.contains("valid")) {
      inputElement.classList.remove("valid");
    }
  }
});

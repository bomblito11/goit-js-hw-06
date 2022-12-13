let counterValue = 0;

const counterElement = document.querySelector(`#value`);

const decreaseValue = () => {
  counterValue--;
  counterElement.textContent = counterValue;
};

const increaseValue = () => {
  counterValue++;
  counterElement.textContent = counterValue;
};

document
  .querySelector(`[data-action="decrement"]`)
  .addEventListener("click", decreaseValue);
document
  .querySelector(`[data-action="increment"]`)
  .addEventListener("click", increaseValue);

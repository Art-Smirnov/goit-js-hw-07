const valueRef = document.querySelector("#value");

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);

let counterValue = 0;

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

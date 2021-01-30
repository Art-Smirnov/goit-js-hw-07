const valueRef = document.querySelector("#value")

let counterValue = 0

valueRef.textContent = counterValue
const decrementBtnRef = document.querySelector('button[data-action="decrement"]')
const incrementBtnRef = document.querySelector('button[data-action="increment"]')

decrementBtnRef.addEventListener("click", () => (counterValue -= 1))

const increment = () => {}

console.log(counterValue)

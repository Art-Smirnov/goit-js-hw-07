const inputRef = document.querySelector('input[type="number"]')
const boxesRef = document.querySelector("#boxes")
const createBtnRef = document.querySelector('button[data-action="render"]')
const removeBtnRef = document.querySelector('button[data-action="destroy"]')

let inputValue = 0
inputRef.addEventListener("input", handleGetInputValue)
createBtnRef.addEventListener("click", handleCreateBoxes)
removeBtnRef.addEventListener("click", handleRemoveBoxes)

function handleGetInputValue(e) {
  inputValue = e.target.value
}

function handleCreateBoxes() {
  createBoxes(inputValue)
}

function handleRemoveBoxes() {
  boxesRef.innerHTML = ""
}

function createBoxes(amount) {
  let arr = []
  let boxSize = 30

  for (let i = 0; i < amount * 10; i += 10) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    const boxRef = document.createElement("div")
    boxSize += i

    boxRef.style.backgroundColor = randomColor
    boxRef.style.width = `${boxSize}px`
    boxRef.style.height = `${boxSize}px`

    arr.push(boxRef)
  }
  boxesRef.append(...arr)
}

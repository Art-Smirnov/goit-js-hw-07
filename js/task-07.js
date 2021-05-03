const rangeValueRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

rangeValueRef.addEventListener("input", handleChangeFontSize);

function handleChangeFontSize(e) {
  textRef.style.fontSize = `${e.target.value}px`;
}

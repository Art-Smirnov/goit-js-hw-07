const inputRef = document.querySelector("#name-input");
let nameOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handleGgeet);

function handleGgeet(event) {
  event.target.value.length === 0
    ? (nameOutputRef.textContent = "незнакомец")
    : (nameOutputRef.textContent = event.target.value);
}

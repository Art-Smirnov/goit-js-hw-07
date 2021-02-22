const inputRef = document.querySelector('input[data-length="6"]');
const maxInputLengthRef = inputRef.dataset.length;

inputRef.addEventListener("blur", handleInputLengthCheck);
inputRef.addEventListener("focus", handleClearClasslist);

function handleInputLengthCheck(e) {
  const inputLength = e.target.value.length;

  inputLength >= maxInputLengthRef ? e.target.classList.add("valid") : e.target.classList.add("invalid");
}

function handleClearClasslist(e) {
  e.target.classList.remove("valid");
  e.target.classList.remove("invalid");
}

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const createListItem = (item) => {
  const listItemRef = document.createElement("li")
  listItemRef.textContent = item

  return listItemRef
}

const ingredientsList = ingredients.map((ingredient) => createListItem(ingredient))
const ingredientsListRef = document.querySelector("#ingredients")

ingredientsListRef.append(...ingredientsList)

console.log(ingredientsListRef)

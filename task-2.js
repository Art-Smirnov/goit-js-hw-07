const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const createListItem = (item) => {
  const listItemRef = document.createElement("li")
  console.log(listItemRef)
  listItemRef.textContent = item
  return listItemRef
}
const ingredientsList = ingredients.map((ingredient) => createListItem(ingredient))

console.log(ingredientsList)

const ingredientsListRef = document.querySelector("#ingredients")
ingredientsListRef.append(...ingredientsList)

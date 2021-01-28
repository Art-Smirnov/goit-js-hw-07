const categoriesRef = document.querySelector("#categories")
const categoriesQuantity = categoriesRef.children.length
console.log(`В списке ${categoriesQuantity} категории.`)

categoriesRef.querySelectorAll(".item").forEach((el) => {
  const categoryName = el.querySelector("h2").textContent
  const categoryElementsQuantity = el.querySelector("ul").children.length

  console.log(`Категория:${categoryName}`)
  console.log(`Количество элементов:${categoryElementsQuantity}`)
})

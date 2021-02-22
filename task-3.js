const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryRef = document.querySelector("#gallery");
const galleryMarkup = createGalleryMarkup(images);

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(images) {
  return images.map(({ url, alt }) => `<li class="gallery__item"><img src="${url}" alt="${alt}"></li>`).join("");
}

/** Варіант з використанням createElement/ */

// const createImgListItem = (img) => {
//   const listItemRef = document.createElement("li")
//   const imgRef = document.createElement("img")

//   imgRef.src = img.url
//   imgRef.alt = img.alt

//   listItemRef.classList.add("gallery__item")
//   listItemRef.append(imgRef)

//   return listItemRef
// }

// const imagesList = images.map((img) => createImgListItem(img))

// const galleryRef = document.querySelector("#gallery")

// galleryRef.append(...imagesList)

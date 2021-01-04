import images from "./gallery-items.js";

const markup = images.map((image) => {
  let listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  listItem.insertAdjacentHTML(
    "afterbegin",
    `<a class = "gallery__link" href = ${image.original}> <img class = 'gallery__image' src = ${image.preview} data-source = ${image.original} /> </a>`
  );
  return listItem;
});

const list = document.querySelector(".js-gallery");
list.append(...markup);

const backdrop = document.querySelector(".js-lightbox");
const closeModal = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const overlay = document.querySelector(".lightbox__overlay");
const forChangeImg = document.querySelector(".lightbox__image");

list.addEventListener("click", getUrlImage);

function getUrlImage(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  const urlImage = target.dataset.source;
  forChangeImg.src = urlImage;
  backdrop.classList.add("is-open");
}

closeModal.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
  forChangeImg.src = "";
});
overlay.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    backdrop.classList.remove("is-open");
  }
  forChangeImg.src = "";
});

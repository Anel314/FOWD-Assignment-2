const pictures = document.querySelectorAll(".galleryPicture");
const modal = document.querySelector("dialog");
const modalImg = modal.querySelector("img");
const close = modal.querySelector("button");

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    console.log("click");

    modalImg.src = picture.src;
    modal.showModal();
  });
});

close.addEventListener("click", () => modal.close());

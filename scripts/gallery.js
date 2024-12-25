const gallery = document.querySelector(".gallery");
const pictures2 = Array.from(document.querySelectorAll(".galleryPicture"));
const showMoreBtn = document.getElementById("showMore");
const showLessBtn = document.getElementById("showLess");

let visibleImages = 4;
function updateGallery() {
  pictures2.forEach((picture, index) => {
    if (index < visibleImages) {
      picture.style.display = "inline-block";
    } else {
      picture.style.display = "none";
    }
  });
}

showMoreBtn.addEventListener("click", () => {
  if (visibleImages < pictures2.length) {
    visibleImages += 1;
    updateGallery();
  }
});

showLessBtn.addEventListener("click", () => {
  if (visibleImages > 1) {
    visibleImages -= 1;
    updateGallery();
  }
});

updateGallery();

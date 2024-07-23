const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach((sliderImages) => {
    //half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImages.height / 2;
    //bottom of the image
    const imageBottom = sliderImages.offsetTop + sliderImages.height;
    const isHalfShown = slideInAt > sliderImages.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImages.classList.add("active");
    } else {
      sliderImages.classList.remove("active");
    }
  });
}

window.addEventListener('scroll', checkSlide);
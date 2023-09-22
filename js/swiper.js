//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

const SLIDER_URL = "http://localhost:3001/sliders";
const swiperWrapper = document.querySelector(".swiper-wrapper");
fetch(SLIDER_URL)
  .then((response) => {
    return response.json();
  })
  .then((sliders) => {
    sliders.forEach(({ title, text, image }) => {
      swiperWrapper.innerHTML += `
          <div class="swiper-slide">
             <div class="slider-card">
                <div class="slider-info">
                  <h1 class="title">${title}</h1>
                  <p>${text}</p>
                </div>
                <div class="slider-image">
                  <img src=${image} alt="" />
                </div>
              </div>
          </div>
    `;
    });
  });

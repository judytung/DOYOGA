"use strict";

var swiper = new Swiper('.courseSwiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 2
  },
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1
      }
    }
  }
});
//# sourceMappingURL=all.js.map

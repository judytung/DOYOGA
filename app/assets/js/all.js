var swiper = new Swiper('.courseSwiper', {
  // slidesPerColumnFill: 'horizontal',
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 2,
  },
  spaceBetween: 30,

  breakpoints: {
    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1,
      },
    },
  },
});



var CusSwiper = new Swiper('.cusSwiper',{
  slidesPerView:1,
  grid :{
    fill:'row',
    rows:3,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween:30,
      grid:{
        rows:2,
      }
    },
    992:{
      slidesPerView: 3,
      spaceBetween:30,
      grid:{
        rows:2,
      }
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev"
  },
});
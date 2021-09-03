"use strict";

/*index course*/
var swiper = new Swiper('.courseSwiper', {
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
/*index 聽他們怎麼說*/

var CusSwiper = new Swiper('.cusSwiper', {
  slidesPerView: 1,
  grid: {
    fill: 'row',
    rows: 3
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
      grid: {
        rows: 2
      }
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2
      }
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev"
  },
  autoplay: {
    delay: 3500
  }
});
/*reservation collapse*/

var firstBtn = document.querySelector('.firstPlanBtn');
var shortPlan = document.querySelector('.short-plan');
var longPlan = document.querySelector('.long-plan');
var firstPlan = document.querySelector('.firstPlan-card');
firstBtn.addEventListener('click', function () {
  shortPlan.classList.add('d-none');
  longPlan.classList.add('d-none');
  firstPlan.classList.add('border-4');
});
var planLevelCard = document.querySelector('.planLevel-card');
var checkCircle = document.querySelector('.check-circle');
var choosePlan = document.querySelector('.choose-plan');
var keepReser = document.querySelector('.keepReser');
planLevelCard.addEventListener('click', function () {
  planLevelCard.classList.add('border-white');
  planLevelCard.classList.add('border-4');
  checkCircle.classList.add('opacity-100');
  choosePlan.classList.add('d-block');
  keepReser.classList.add('d-block');
});
/*reservation swiper*/

var Planswiper = new Swiper('.planSwiper', {
  slidesPerView: 1,
  grid: {
    fill: 'row',
    rows: 3
  },
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      grid: {
        rows: 1
      }
    },
    992: {
      slidesPerView: 3
    }
  }
});
/*datepicker*/

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  nextArrow: ' >',
  prevArrow: ' <',
  buttonClass: 'btn text-primary'
});
//# sourceMappingURL=all.js.map

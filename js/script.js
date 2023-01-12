const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    shouldSort: false,
});


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  })
};


let headerSearchBtn = document.querySelector('.header-form__btn');
let headerSearch = document.querySelector('.header-form__search');

headerSearchBtn.onclick = function() {
  headerSearch.classList.toggle('header-form__search--visible');
};


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let list = document.querySelector('.header__list');
let menuLinks = menu.querySelectorAll('.header-nav__link');
let listLinks = list.querySelectorAll('.header__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  list.classList.toggle('header__list--active');

  document.body.classList.toggle('stop-scroll')
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

    list.classList.remove('header__list--active');
  })
});

listLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

    list.classList.remove('header__list--active');
  })
});


let play = document.querySelector('.header__menu');
let box = document.querySelector('.header__box');
let playBtn = document.querySelector('.header-menu__btn');

play.addEventListener('click',

function() {

  playBtn.classList.toggle('header-menu__btn--active');

  box.classList.toggle('header__box--visible');
});


const showMore = document.querySelector('.podcasts__more');
const podcastsLength = document.querySelectorAll('.podcasts__item').length;
let items = 8;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.podcasts__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length === podcastsLength) {
		showMore.style.display = 'none';
	};
});


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});


new Accordion('.accordion-container');


const slider = document.querySelector('.swiper');
const sliderWe = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 650 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 15,
      slideClass: 'swiper-slide',
    });

    slider.dataset.mobile = 'true';
  };

  if (window.innerWidth > 650) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
       mySwiper.destroy();
    };
  };
};

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});


let swiper = new Swiper(sliderWe, {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.addEventListener("DOMContentLoaded", function () {

  const validation = new JustValidate('.about__form', {
    errorFieldCssClass: 'is-invalid',
  });

  validation
    .addField('.name', [
      {
        rule: 'required',
        errorMessage: 'Ошибка',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Ошибка',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Ошибка',
      },
    ])
    .addField('.mail', [
      {
        rule: 'required',
        errorMessage: 'Ошибка',
      },
      {
        rule: 'email',
        errorMessage: 'Ошибка',
      },
    ]);
});

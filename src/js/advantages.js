import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const galleryList = document.querySelector('.advantages-list');
const prevBtnEl = document.querySelector('.advantages-icon-prev');
const nextBtnEl = document.querySelector('.advantages-icon-next');

const swiper = new Swiper('.advantages-swiper', {
  modules: [Navigation, Scrollbar, Keyboard],
  speed: 600,
  navigation: {
    nextEl: '.advantages-swiper-button-next',
    prevEl: '.advantages-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 1,
  spaceBetween: 16,
});

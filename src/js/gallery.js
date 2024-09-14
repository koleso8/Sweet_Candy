import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const galleryList = document.querySelector('.gallery-list');
const prevBtnEl = document.querySelector('.reviews-icon-prev');
const nextBtnEl = document.querySelector('.reviews-icon-next');

async function makeGallery() {
  const images = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
  ];
  renderGallery(images);
}

function renderGallery(images) {
  const markup = images
    .map(img => {
      return `<li class="gallery-item swiper-slide">
      <picture >
        <source
          media="(min-width: 768px)"
          srcset="./img/desktop_gallery_${img}1x.png 1x, ./img/desktop_gallery_${img}2x.png 2x"
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
          srcset="./img/mobile_gallery_${img}1x.png 1x, ./img/mobile_gallery_${img}2x.png 2x"
          type="image/png"
        />
        <img
          src="./src/img/desktop_gallery_${img}1x.png "
          alt="img_${img}"
          class="galleryImg"
          loading="lazy"
        />
      </picture>
      </li>`;
    })
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
}

document.addEventListener('DOMContentLoaded', () => {
  makeGallery();

  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Scrollbar],
    speed: 600,
    loop: true,
    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      swiper.slideNext(1000);
    } else if (event.key === 'ArrowLeft') {
      swiper.slidePrev(1000);
    } else if (event.key === 'Tab') {
      event.preventDefault();
      if (event.shiftKey) {
        swiper.slidePrev(1000);
      } else {
        swiper.slideNext(1000);
      }
    }
  });
});

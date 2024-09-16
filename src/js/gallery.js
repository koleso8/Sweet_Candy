import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper/modules';
import { galleryImages } from './images';

const galleryList = document.querySelector('.gallery-list');
const prevBtnEl = document.querySelector('.reviews-icon-prev');
const nextBtnEl = document.querySelector('.reviews-icon-next');

async function makeGallery() {
  const images = [
    {
      imgMob1: galleryImages.gallery1_mob1x,
      imgMob2: galleryImages.gallery1_mob2x,
      imgDesk1: galleryImages.gallery1_desk1x,
      imgDesk2: galleryImages.gallery1_desk2x,
    },
    {
      imgMob1: galleryImages.gallery2_mob1x,
      imgMob2: galleryImages.gallery2_mob2x,
      imgDesk1: galleryImages.gallery2_desk1x,
      imgDesk2: galleryImages.gallery2_desk2x,
    },
    {
      imgMob1: galleryImages.gallery3_mob1x,
      imgMob2: galleryImages.gallery3_mob2x,
      imgDesk1: galleryImages.gallery3_desk1x,
      imgDesk2: galleryImages.gallery3_desk2x,
    },
    {
      imgMob1: galleryImages.gallery4_mob1x,
      imgMob2: galleryImages.gallery4_mob2x,
      imgDesk1: galleryImages.gallery4_desk1x,
      imgDesk2: galleryImages.gallery4_desk2x,
    },
    {
      imgMob1: galleryImages.gallery5_mob1x,
      imgMob2: galleryImages.gallery5_mob2x,
      imgDesk1: galleryImages.gallery5_desk1x,
      imgDesk2: galleryImages.gallery5_desk2x,
    },
    {
      imgMob1: galleryImages.gallery6_mob1x,
      imgMob2: galleryImages.gallery6_mob2x,
      imgDesk1: galleryImages.gallery6_desk1x,
      imgDesk2: galleryImages.gallery6_desk2x,
    },
    {
      imgMob1: galleryImages.gallery7_mob1x,
      imgMob2: galleryImages.gallery7_mob2x,
      imgDesk1: galleryImages.gallery7_desk1x,
      imgDesk2: galleryImages.gallery7_desk2x,
    },
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
          srcset="${img.imgDesk1} 1x,${img.imgDesk2} 2x"
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
           srcset="${img.imgMob1} 1x,${img.imgMob2} 2x"
          type="image/png"
        />
        <img
          src="${img.imgMob1} "
          alt="img_${img.imgMob1}"
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

  const swiper = new Swiper('.gallery-swiper', {
    modules: [Navigation, Scrollbar, Keyboard],
    speed: 600,
    loop: true,
    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
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
});

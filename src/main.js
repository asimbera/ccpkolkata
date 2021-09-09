import '@splidejs/splide/dist/css/splide.min.css';

import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    gap: '3rem',
    arrows: 'slide',
    breakpoints: {
      480: {
        perPage: 1,
      },
      720: {
        perPage: 2,
      },
      1080: {
        perPage: 3,
      },
    },
  }).mount();
});

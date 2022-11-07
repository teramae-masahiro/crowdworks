import '@scss/swiper';
import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
   modules: [ Navigation, Pagination ],
   direction: 'vertical',
   loop: true,

   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

import { Slider } from './class/swiper';
import '@scss/reset/reset';

const slider = new Slider(".swiper");
slider.start();
// slider.swiper.on('slideChange', function () {
//     console.log('slide changed');
//     console.log(slider.swiper);
// });

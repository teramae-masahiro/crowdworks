import { Slider } from './class/swiper';
import { ScrollObserver } from './class/observer';
// import '@scss/reset/reset';
import gsap from "gsap";



//slider
const slider = new Slider(".swiper");
const a = document.querySelector('.swiper-slide');
slider.start();
slider.swiper.on('slideChange', function () {
console.log(gsap,a);
});

//observer
const observerCallback =(el, isIntersecting) => {
  if (isIntersecting) {
    console.log('hello');
  } else {
    console.log('bye');
  }
};
new ScrollObserver(".target", observerCallback, {
  once: false,
  threshold: 0.5,
});

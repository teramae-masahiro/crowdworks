import { Slider } from './class/swiper';
import { ScrollObserver } from './class/observer';
import '@scss/reset/reset';


//slider
const slider = new Slider(".swiper");
slider.start();
slider.swiper.on('slideChange', function () {
    console.log('slide changed');
    console.log(slider.swiper);
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

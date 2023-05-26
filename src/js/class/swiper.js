import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export class Slider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
        // modules: [ Navigation, Pagination ],

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      grabCursor: true,
      effect: "fade",

      // effect: "coverflow",
      centeredSlides: true,
      // slidesPerView: 1,
      speed: 1000,

    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}

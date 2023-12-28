export default function initSwiper() {
  let swiperParceiros = new Swiper('.swiperParceiros', {
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 6000,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
      },
    },
  });
}

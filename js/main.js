new WOW().init();

var mySwiper = new Swiper('.slider-text', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<img src="images/clients/avatar/' + (index + 1) + '.png" class="' + className + '">' + (index + 1) + '</img>';
    },

  }, 
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.navbar');
menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('navbar-active');
})

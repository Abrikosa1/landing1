// new WOW().init();
/* var galleryThumbs = new Swiper('.slider-avatars', {
    spaceBetween: 0,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true, 

  }); */

/* var mySwiper = new Swiper('.slider-text', {
    spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<img src="images/clients/avatar/'+(index + 1)+'.png" class="' + className + '">' + (index + 1) + '</img>';
        },
        
      },
     
  });*/

  var mySwiper = new Swiper('.slider-text', {
    spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<img src="images/clients/avatar/'+(index + 1)+'.png" class="' + className + '">' + (index + 1) + '</img>';
        },
        
      },
    
  });


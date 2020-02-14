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


function loadMore(){
  var fourChildNode = document.querySelectorAll('.work-figure-inactive');
  
  try{
    for(let i=0; i<6;i++){    
    if(fourChildNode[i]==undefined){
        var popup = document.getElementById("myPopup");
        popup.classList.remove('hide')
        popup.classList.toggle('show');
      throw new Error("Больше нечего загружать");
    }
    fourChildNode[i].classList.remove('work-figure-inactive')
    fourChildNode[i].classList.toggle('work-figure-active');
    }
  }
  catch(error) {
    console.error(error);
  }
}

var worksBtn = document.querySelector('.works-btn');
worksBtn.onmouseout = function(){
  var popup = document.getElementById("myPopup");
  popup.classList.remove('show')
  popup.classList.toggle('hide');
}




  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back-to-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back-to-top-show');
    }
  }

  function backToTop() {
    var scrollStep = document.body.scrollHeight / 100;
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -(scrollStep));
    setTimeout(backToTop, 0);
      }
    }

  var goTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);

/* end begin Back to Top button  */
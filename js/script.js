/*   header   */ 
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

/*  burger-menu  */
let menuBtn = document.querySelector('.header-burger-btn');
let menu = document.querySelector('.header-menu');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock')
})

// back-to-top

// const goTopBtn = document.querySelector(".back-to-top");
// goTopBtn.addEventListener("click", goTop());
// window.addEventListener('scroll', trackScroll);

// function trackScroll() {
//     const offset = window.pageYOffset;
//     const coords = document.documentElement.clientHeight;
    
//     if (offset > 800) {
//         goTopBtn.classList.add("back-to-top--show");
//     } else {
//         goTopBtn.classList.remove("back-to-top--show");
//     }
// }
// function goTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -75);
//         setTimeout(goTop, 0);
//     }
// }

/* news-swiper-js */

let swiper1 = new Swiper('.page-news-swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    fade: true,
    centerSlide: true,

    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
          },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
          },
      },  
      
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.pagination_>.swiper-button-next',
      prevEl: '.pagination_>.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.pagination_>.swiper-scrollbar',
      draggable : true,
      snapOnRelease: true,
    },

});

/* news-swiper-js */

let swiper2 = new Swiper('.page-events-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
  
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.pagination_2>.swiper-button-next',
      prevEl: '.pagination_2>.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.pagination_2>.swiper-scrollbar',
      draggable : true,
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        620: {
            slidesPerView: 2,
          },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
});
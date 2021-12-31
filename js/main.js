$(function () {
  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="testimonials-prev"><img src="img/testimonials/arrow-left.png" alt="arrow"/></button>',
    nextArrow: '<button type="button" class="testimonials-next"><img src="img/testimonials/arrow-left.png" alt="arrow"/></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  const
    hamburgerButton = document.querySelector('.hamburger'),
    topNav = document.querySelector('.top-nav'),
    menuMobile = document.querySelector('.menu-mobile');

  hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('is-active');
    menuMobile.classList.toggle('active');
    topNav.classList.toggle('active');
  })

  $('.popup-close').on('click', function (e) {
    $('.popup-info').removeClass('is-active');
    $('.overflow').removeClass('is-active');
  });

  for (let i = 1; i <= 10; i++) {

    $(" #product" + i + " ").on('click', function () {
      $("#popup" + i + " .popup").addClass('is-active');
      $('.overflow').addClass('is-active');
    });

  }

  $(".menu, .menu-mobile, .main-bottom, .main-about").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    let id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1000);
  });


});


// prevArrow: '<button type="button" class="testimonials-prev"><img src="img/testimonials/arrow-left.svg" alt="arrow"/></button>',
// nextArrow: '<button type="button" class="testimonials-next"><img src="img/testimonials/arrow-left.svg" alt="arrow"/></button>',
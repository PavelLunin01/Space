$(function () {
  $('.slider__list').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/slider/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/slider/arrow-right.svg" alt="arrow-right">',
    responsive: [{
      breakpoint: 481,
      settings: {
        arrows: false
      }
    }]
  });
  /* $(function () {

  $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass
  
  $('.menu__link').on('click', function () {
  $('.menu__list').removeClass('menu__list--active');
  $('.menu__btn').removeClass('menu__btn--active');
  $('.body').removeClass('body--active');
    });

}); */

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__list').removeClass('active');
  });

  const header__top = document.querySelector('.header__top');
    window.onload = window.onscroll = () => {
      if (window.pageYOffset > 50) {
        header__top.classList.add('header__top-active');
      }
      else {
        header__top.classList.remove('header__top-active');
      }
  }

  $(".menu__list a").on("click", function (event) {
 
    event.preventDefault();
 
    var id  = $(this).attr('href'),
 
    top = $(id).offset().top;
 
    $('body,html').animate({
      scrollTop: top - 65
    }, 1500);
  });
});


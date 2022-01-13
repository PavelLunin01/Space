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

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('active');
  });
});
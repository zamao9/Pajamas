$(function () {

                  /* HEADER */

  $('.header').click(function(event) {
    event.preventDefault();

    $('.nav').toggleClass('active');
  })


                  /* BURGER */

  $('.burger').click(function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
  })




})

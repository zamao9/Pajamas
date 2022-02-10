document.addEventListener('DOMContentLoaded', () => {
  bannerCollapseHandle();
});

function bannerCollapseHandle () {
  let miniatures = document.getElementsByClassName('miniature'),
    mainBanner = document.getElementById('main_banner');

  for (let i = 0; miniatures.length > i; ++i) {
    miniatures[i].addEventListener('click', (event) => {
      let src = event.currentTarget.src;
      mainBanner.src = src;
    })
  }
}




$(function () {

                  /* BURGER */

  $('.burger').click(function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
  })



                  /* SIZES */

  $('.sizes').click(function(event) {
    event.preventDefault();

    $('.size_body').toggleClass('active');
    $('.size_items').toggleClass('active');
  })






})

$(function () {
  $(".submenu").hide();
  $(".menu ul li").hover(
    function () {
      $(".submenu").stop().slideDown();
    },
    function () {
      $(".submenu").stop().slideUp();
    }
  );
  $(".submenu").hover(
    function () {
      $(this).stop().slideDown();
    },
    function () {
      $(this).stop().slideUp();
    }
  );
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
  });

  $(".custom1").owlCarousel({
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    animateOut: "fadeOut",
  });
});

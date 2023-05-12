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
});

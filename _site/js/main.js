//Load the Document
$(document).ready(function(){

  //Log
  console.log('ready!');

// click the hamburger icon
  $('.toggle-mobile-menu').click(function(){

    // shows the mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible');

  });
  $('#mobile-menu a').click(function(){

    // shows the mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible');

  });

  $(".dropdown-box").click(function(){
    $(this).toggleClass("spin")
   $(this).children(".dropdown-content").slideToggle();
 });
});

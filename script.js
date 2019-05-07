
$(document).ready(function(){

  $(".menu-hamburger").on("click", function(){
    $(".menu-hamburger").toggleClass('active');
    $(".fly-in-menu").toggleClass('active');
    $(".menu").toggleClass('burger-active');
  });

  $(".fly-in-menu").on("click", function(e){
    if (e.target !== this){
      return;
    }
    $(".menu").removeClass('burger-active');
    $(".menu-hamburger").removeClass('active');
    $(".fly-in-menu").removeClass('active');
  });

  $(".fill-form-btn").on("click", function(){
    fbq('track', 'CompleteRegistration');
  });

  $(".FAQ-short").on("click", function(){
    idSection = $(this).attr('id');
    $("html, body, .main").animate({
     scrollTop: $("#FAQ-"+idSection).offset().top}, 2000);
  })
});


$(document).ready(function(){

  $("#header-btn").on("click", function(){
    $("html, body, .main").animate({
     scrollTop: $(".sign-up-section").offset().top+80}, 1000);
     return false;
  });

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

  $("#sign-up").on("click", function(){
    email = $("#email").val();
    terms = $("#terms").prop("checked");

    if (terms && email != "") {
      $('.join').css('display', 'none');
      $('.thanks-newsletter').css('display', 'flex');
      $.post('https://jacki-backend.herokuapp.com/register?email=' + email, function(data) {
      });
      fbq('track', 'CompleteRegistration');
    }
  });

  $(".FAQ-short").on("click", function(){
    idSection = $(this).attr('id');
    $("html, body, .main").animate({
     scrollTop: $("#FAQ-"+idSection).offset().top}, 2000);
  })
});


$(document).ready(function(){

  $("#header-btn").on("click", function(){
    $("html, body, .main").animate({
     scrollTop: $(".sign-up-section").offset().top+80}, 1000);
return false;
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

});

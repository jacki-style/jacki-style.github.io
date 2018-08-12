
$(document).ready(function(){

  $("#header-btn").on("click", function(){
    $("html, body, .main").animate({
     scrollTop: $(".sign-up-section").offset().top}, 1000);
return false;
  });

  $("#sign-up").on("click", function(){
    email = $("#email").val();

    $.post('https://jacki-backend.herokuapp.com/register?email=' + email, function(data) {
      if (data.result == "ok") {
        $('.join').css('display', 'none');
        $('.thanks-newsletter').css('display', 'flex');
      }
    });
  });

});

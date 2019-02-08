
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

  $("#email").focusout(function (){
    if(!isValidEmailAddress($("#email").val())){
      $(".label-email").css('top', 'calc(50% - 92px)')
      $(".error-email").show()
    } else {
      $(".label-email").css('top', 'calc(50% - 70px)')
      $(".error-email").hide()
    }
  });

  $("#sign-up").on("click", function(){
    email = $("#email").val();
    terms = $("#terms").prop("checked");

    if (terms && isValidEmailAddress(email)) {
      email = email.replace(/(\+)+/g, "%2B")
      $.post('https://jacki-backend.herokuapp.com/register?email=' + email, function(data) {
      })
        .done(function() {
          $('.join').css('display', 'none');
          $('.thanks-newsletter').css('display', 'flex');
        })
        .fail(function() {
          $(".error-response").show()
        })
      fbq('track', 'CompleteRegistration');
    }
  });

  $(".FAQ-short").on("click", function(){
    idSection = $(this).attr('id');
    $("html, body, .main").animate({
     scrollTop: $("#FAQ-"+idSection).offset().top}, 2000);
  })
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

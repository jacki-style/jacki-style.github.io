
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

  $(".FAQ-short").on("click", function(){
    idSection = $(this).attr('id');
    $("html, body, .main").animate({
     scrollTop: $("#FAQ-"+idSection).offset().top}, 2000);
  })

  $(".btn--primary").on("click", function () {
    if(!$(this).hasClass("disabled")){
      var email = $(this).siblings('input').val();
      email = email.replace(/(\+)+/g, "%2B")
      $.post('https://jacki-backend.herokuapp.com/register?email=' + email, function(data) {
        window. location.href="https://forms.gle/aeyrpmfLjAEBnk9m9"
      })
      fbq('track', 'CompleteRegistration');
    }
  })

  $('input[type="email"]').on("input", function (){
    if($(this).val().length < 1){
      $(this).siblings('.error-email').hide();
      return false;
    }
    if(!isValidEmailAddress($(this).val())){
      $(this).siblings('.error-email').show();
      $(this).siblings('.btn--primary').addClass('disabled');
    } else {
      $(this).siblings('.error-email').hide();
      $(this).siblings('.btn--primary').removeClass('disabled');
   }
 });


});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

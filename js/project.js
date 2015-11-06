


var numberOfHiddenPhotos = 0;

setInterval( function(){

  if (numberOfHiddenPhotos === 0){
    $('.photo-3').fadeOut();
    numberOfHiddenPhotos = 1;

  } else if( numberOfHiddenPhotos === 1){
    $('.photo-2').fadeOut();
    numberOfHiddenPhotos = 2;

  } else if( numberOfHiddenPhotos == 2){
    $('.photo-3, .photo-2').fadeIn();
    numberOfHiddenPhotos = 0;
  }

}, 4000);

$(".trigger").on("click", function (){
  // use the jquery slide toggle function to animate in and out our navigation links
  $("nav").slideToggle("slow");
});


$('.quote').slick({
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  adaptiveHeight: true
});


// Email Validation
$(document).ready(function() {

  $('#btn-submit').click(function() {

    $(".error").hide();
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


    var emailaddressVal = $("#contact-email").val();
    if(emailaddressVal == '') {
      $("#contact-email").after('Please enter your email');
      $("#contact-email").css('color', 'red');
      hasError = true;
    }

var messageVal = $("#message").val();
if (messageVal == '') {
  $("#message").after('Send us a message');
  $("#message").css ('color', 'red');
  hasError = true;
}

    if(hasError == true) { return false; }

    });
});

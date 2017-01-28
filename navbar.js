$(document).ready(function(){

  $(".navbar").show();

    $(function () {
        $(window).scroll(function () {

          if ($(this).scrollTop() > 10) {
              $('.navbar').fadeOut();
          } else {
              $('.navbar').fadeIn();
          }
      });
  });

});

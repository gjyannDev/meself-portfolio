function darkLogo() {
  jQuery(function($) {
    var colorDark ='#1E1E1E';
  
    $("svg").each(function(){
      $(this).find(".logo__img").css({ fill: colorDark });
    }); 
  });
}

function lightLogo() {
  jQuery(function($) {
    var colorLight ='#d1d1c7';
  
    $("svg").each(function(){
      $(this).find(".logo__img").css({ fill: colorLight });
    }); 
  });
}

$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 350 ) {
          $("body").css('background-color', '#1E1E1E');
          $(".header__container").css('background-color', '#1E1E1E');
          $('.header__link').css('color', '#d1d1c7');
          $('.contact__btn').css('background-color', '#d1d1c7');
          $('.cntct__btn').css('color', '#1E1E1E');
          lightLogo();
      } else {
          $("body").css('background-color', '#FDFDFF');
          $(".header__container").css('background-color', '#FDFDFF');
          $('.header__link').css('color', '#1E1E1E');
          $('.contact__btn').css('background-color', '#1E1E1E');
          $('.cntct__btn').css('color', '#FDFDFF');
          darkLogo();
      }

      if ( scroll_pos > 1300 ) {
        $("body").css('background-color', '#FDFDFF');
        $(".header__container").css('background-color', '#FDFDFF');
        $('.header__link').css('color', '#1E1E1E');
        $('.contact__btn').css('background-color', '#1E1E1E');
        $('.cntct__btn').css('color', '#d1d1c7');
        darkLogo();
      } 

      if ( scroll_pos > 2400 ) {
        $("body").css('background-color', '#1E1E1E');
        $(".header__container").css('background-color', '#1E1E1E');
        $('.header__link').css('color', '#d1d1c7');
        $('.contact__btn').css('background-color', '#d1d1c7');
        $('.cntct__btn').css('color', '#1E1E1E');
        lightLogo();
      }

      if ( scroll_pos > 4400 ) {
        $("body").css('background-color', '#FDFDFF');
        $(".header__container").css('background-color', '#FDFDFF');
        $('.header__link').css('color', '#1E1E1E');
        $('.contact__btn').css('background-color', '#1E1E1E');
        $('.cntct__btn').css('color', '#d1d1c7');
        darkLogo();
      }
  });
});
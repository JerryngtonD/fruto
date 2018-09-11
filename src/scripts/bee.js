var topField;
$('.move-wrapper').hover(function() {
    $( this ).css({zIndex: 13});
});


$(document).ready(function(){
    if ($( window ).width() < 400) {
        topField = 220;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});

    }

    else if ($( window ).width() >= 400 && $( window ).width() < 801)  {
        topField = 280;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});

    }

    else if ($( window ).width() >= 801) {
        topField = 100;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});
    }
});

$('.move-wrapper').sticky({zIndex: 13, topSpacing: topField});


$( window ).resize(function() {
    if ($( window ).width() < 400) {
        topField = 215;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});



    } else if ($( window ).width() >= 400 && $( window ).width() < 801)  {
        topField = 280;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});

    } else if ($( window ).width() >= 801 ) {
        topField = 100;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});
    }
});


var lastScrollTop = 0;
var topFromBottom = false;
var limit = null;

$(window).on( 'scroll', function() {
    var st = $(this).scrollTop();
    if ($( window ).height() < 870) {
            //console.log($('.move-wrapper').offset().top);

        console.log($('.move-wrapper').offset().top);

      if ($('.move-wrapper').offset().top >= 2550  && st > lastScrollTop){
            // downscroll code
          topFromBottom = true;
          $('.move-wrapper').unstick();
          $('.move-wrapper').css({top: 2550});


        } else if (st < lastScrollTop) {

          if ($( window ).width() < 400) {
              limit = 200;
          } else {
              limit = 270;
          }

          if ($('.move-wrapper').offset().top <= limit) {


              $('.move-wrapper').unstick();
              $('.move-wrapper').sticky({zIndex: 13, topSpacing: limit});

          } else if (topFromBottom ){
              topFromBottom = false;
              $('.move-wrapper').unstick();
              $('.move-wrapper').sticky({zIndex: 13, topSpacing: 50});
          }
        }
        lastScrollTop = st;
    }
});

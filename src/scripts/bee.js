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
        topField = 320;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});

    }

    else if ($( window ).width() >= 801) {
        topField = 170;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});


    }
});


$('.move-wrapper').sticky({zIndex: 13});

$( window ).resize(function() {
    if ($( window ).width() < 400) {
        topField = 215;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});



    } else if ($( window ).width() >= 400 && $( window ).width() < 801)  {
        topField = 320;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});

    } else if ($( window ).width() >= 801 ) {
        topField = 170;
        $('.move-wrapper').unstick();
        $('.move-wrapper').css({'top': topField});
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});
    }
});





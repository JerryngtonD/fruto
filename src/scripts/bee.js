/*
function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function(value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}

var moveBlock = document.querySelector('.move-wrapper');
var moveBlockHeightValue = getStyle(moveBlock, 'height').replace('px','');
var windowHeightValue = document.body.scrollHeight.toString().replace('px', '');

document.addEventListener('wheel', function(e) {
    var html = document.documentElement;
    var body = document.body;
    var beeTopStyle = getStyle(moveBlock, 'top');
    var beeTopStyleValue = beeTopStyle.replace('px','');

    if (beeTopStyleValue > windowHeightValue - moveBlockHeightValue ) {
        moveBlock.style.top = html.clientTop + 'px';
    }   else {
        var scrollTop = html.scrollTop || body && body.scrollTop || 0;
        scrollTop -= (html.clientTop - 68);
        //scrollTop -= (html.clientTop - Math.floor(moveBlockHeightValue / 2));
        computedStyle = scrollTop + 'px';
        moveBlock.style.top = computedStyle;
    }
}, true);

*/

/*
function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function(value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}

var moveBlock = document.querySelector('.move-wrapper');
var moveBlockHeightValue = getStyle(moveBlock, 'height').replace('px','');

$(window).scroll(function() {
    $('.move-wrapper').css('top', $(this).scrollTop() + "px");
});
*/

var topField = 255;

$(document).ready(function(){
    if ($( window ).width() < 400) {
        topField = 195;
        $('.move-wrapper').css({'top': topField});
    }

    else if ($( window ).width() >= 400 && $( window ).width() < 801)  {
        topField = 280;
        $('.move-wrapper').css({'top': topField});
    }

    else if ($( window ).width() >= 801) {
        topField = 170;
        $('.move-wrapper').css({'top': topField});

    }
});


$('.move-wrapper').sticky({zIndex: 13});
$('.move-wrapper').css({'top': topField});


$( window ).resize(function() {
    if ($( window ).width() < 400) {
        topField = 195;
        $('.move-wrapper').css({'top': topField});
    }

    else if ($( window ).width() >= 400 && $( window ).width() < 801)  {
        topField = 280;
        $('.move-wrapper').css({'top': topField});
    }

    else if ($( window ).width() >= 801 ) {
        topField = 170;
        $('.move-wrapper').css({'top': topField});

    }
});

/*var topField = 255;

$(document).ready(function(){
    if ($( window ).width() < 400) {
        topField = 255;
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});
    }

    else if ($( window ).width() >= 400)  {
        topField = 400;
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});
    }
});

$( window ).resize(function() {
    if ($( window ).width() < 400) {
        topField = 255;
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});
    }

    else if ($( window ).width() >= 400)  {
        topField = 400;
        $('.move-wrapper').sticky({topSpacing: topField, zIndex: 13});
    }
});*/

/*$(document).ready(function(){
    $('.move-wrapper').sticky({topSpacing: 255, zIndex: 13});
});

$( window ).resize(function() {
    if ($( window ).width() >= 400) {
        console.log(1);
        $('.move-wrapper').sticky({topSpacing: 400, zIndex: 13});
    }
});*/

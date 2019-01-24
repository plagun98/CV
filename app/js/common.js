var main = function() {
 
    $('.icon-menu').click(function() { 
        $('.menu').animate({
            left: '0px'
        }, 200);
    });
 
 
    $('.icon-close').click(function() {
        $('.menu').animate({ 
            left: '-285px' 
        }, 200); 
        $('body').animate({ 
            left: '0px' 
        }, 200);
    });

    $('.choose').click(function() {
        $('.eng').toggleClass('fadeout');
        $('.rus').toggleClass('fadeout');
    });

    if(window.innerWidth <= 500){
        $('.myphoto').prependTo('.main_info');
        $('.main_info').css("display",'block');
    }
    window.onresize = ()=>{
        if(window.innerWidth <= 500){
            $('.myphoto').prependTo('.main_info');
            $('.main_info').css("display",'block');
        } else {
            $('.myphoto').appendTo('.main_info');
            $('.main_info').css("display",'flex');
        }
    }
};
 
$(document).ready(main);
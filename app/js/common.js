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
};
 
$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */
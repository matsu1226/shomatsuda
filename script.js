$(function(){
    $('.hbg-icon').on('click',function(){
        $('.hbg-bar').toggleClass('close');
        $('.header-right').fadeToggle(300);

        if($('.hbg-bar').hasClass('close')){
            $('body').css('overflow','hidden')
        }else{
            $('body').css('overflow','auto')
        }
    });

    $('.modal-btn').on('click',function(){      
        $(this).find($('.modal')).fadeIn(300);
        return false;

    });
    $('.modal-close').on('click',function(){
        $('.modal').fadeOut(300);
        return false;

    });

});

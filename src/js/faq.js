   // Анимация спойлера
   $('.item__wrap').click(function(event) {
    if($('.item__content').hasClass('one')){
        $('.item__wrap').not($(this)).removeClass('active');
        $('.item__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
});

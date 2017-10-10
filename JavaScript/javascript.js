$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('id').offset().top},
        'slow');
    return false;
});
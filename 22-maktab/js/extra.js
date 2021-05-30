paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};
Pace.on('done', function(){
$('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19, 1, 0.22, 1]));

$(".loader").delay(1500).animate({top: '-1000'}, 2000, $.bez([0.19, 1, 0.22, 1]));

TweenMax.from(".title", 2, {
    delay: 1.8,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});
});

var height = $('#header').height(); 

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('header').addClass('sticky');
    }else{
        $('header').removeClass('sticky');
    }
})
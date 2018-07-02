'use strict';

var newFunction = function newFunction() {
    console.log('a');
};

newFunction();

$(".arrow ").click(function () {

    $('html,body').animate({ scrollTop: $('.main').offset().top }, 1000);
    return false;
});

// --------------wow
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',

    offset: 0,
    mobile: true,
    live: true,
    callback: function callback(box) {},
    scrollContainer: null
});
wow.init();
// --------------wow END


var timer;

$(window).scroll(function () {

    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
        console.log('scroll event'); //callback your coding
        var skillH = $("#skill").offset().top;
        var windowH = $(window).scrollTop();
        console.log(skillH);
        console.log(windowH);
        if (windowH > skillH - 50) {
            moveProgressBar();
        }
    }, 100);
});

$(window).resize(function () {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
    console.log("moveProgressBar");
    $(".progress-wrap").each(function () {
        var getPercentNum = $(this).attr('data-progress-percent');
        var getPercent = getPercentNum / 100;
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;

        var animationLength = 2500;
        $(this).children('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    });
}

$('.tab-header .tab-btn').each(function () {
    $(this).click(function () {

        var id = $(this).attr('id');
        console.log(id);
        $('.tab-header .tab-btn').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').fadeOut(800);
        $('.tab-content#' + id).delay(800).css('display', 'flex').fadeIn(800);
    });
});
'use strict';

var nw2 = function newFunction() {
    console.log('b');
};
nw2();
//# sourceMappingURL=all.js.map

let newFunction = ()=> {
    console.log('a');
}

newFunction();


$(".arrow ").click(function(){

    $('html,body').animate({scrollTop:$('.main').offset().top},1000);
    return false;
});
    

// --------------wow
var wow = new WOW(
    {
        boxClass:     'wow', 
        animateClass: 'animated',
        
        offset:       0,  
        mobile:       true, 
        live:         true, 
        callback:     function(box) {
    
        },
        scrollContainer: null 
    }
);
wow.init();
// --------------wow END

moveProgressBar();

$(window).resize(function() {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
  console.log("moveProgressBar");
     $(".progress-wrap").each(function(){
        var getPercentNum = $(this).attr('data-progress-percent');
        var getPercent = getPercentNum /100;
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        
        var animationLength = 2500;
        $(this).children('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
     });

}
$(document).ready(function () {
    $('#mycarousel').carousel({interval: 2000});

    // Pause and Play Button Goes Here(Changes Condition)
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
        $('#mycarousel').carousel('pause');
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    
    $("#tableButton").click(function() {
        $("#reserveModal").modal('show');
    });

    $("#loginButton").click(function (){
        $("#loginModal").modal('show');
    })
});
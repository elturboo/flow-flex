$(document).ready(function () {
    "use strict";
    // header fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 130) {
            $(".navbar").css("background-color", "#1d6699");
            $(".navbar").css("background-image", "linear-gradient(90deg, #1d6699 34%, #0e3b5e 100%)");
            $(".navbar").css("box-shadow", "0px 5px 15px 0px #0f40618a");

        } else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");

        }
    });
    //    smooth scroll
    $("a.scroll").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 700);
    });
  
});
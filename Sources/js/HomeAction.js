
$(document).ready(function () {
    carouselConfig();
    navbarHoverAction();
    backTopAction();
});

function carouselConfig() {
    $(".carousel").carousel();
    $("#homeCarousel").carousel({
        interval: 3000
    });
}

function navbarHoverAction() {
    $(".navbar-inverse .navbar-nav > li > a").hover(function () {
        $(this).css("color", "#fff");
    });
    $(".navbar-inverse .navbar-nav > li > a").mouseleave(function () {
        $(this).css("color", "#7d7d7d");
    });
}

function backTopAction() {
    $(".fixed-btn-list a").hover(function () {
        $(".fixed-btn-list").css("background-color", "#333");
    });
    $(".fixed-btn-list a").mouseleave(function () {
        $(".fixed-btn-list").css("background-color", "#777");
    });
    $(".fixed-btn-list a:eq(1)").click(function() {
        $("body").animate({scrollTop: 0},300);
    });
}

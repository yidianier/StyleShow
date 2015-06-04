
$(document).ready(function () {
    navbarHeaderAction();
});

$(window).resize(function () {
    navbarHeaderAction();
});

function navbarHeaderAction() {

    if ($(window).width() <= 768) {
        $(".fixed-btn-list").css("visibility", "hidden");
        $(".navbar-header button").css("background-color", "#333");
    } else {
        $(".fixed-btn-list").css("visibility", "visible");
        $(".navbar-header button").css("background-color", "#333");
    }

}
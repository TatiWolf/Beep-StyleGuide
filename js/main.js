$(document).ready(function($) {
    $('.burger').click(function () {
        $('header nav').slideToggle();
    });
});
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
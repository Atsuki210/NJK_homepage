$(function () {
    $(".openbtn4").click(function (){
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});

$(".openbtn4").click(function () {
    var $menu = document.querySelector('.header-site-menu');
    $(this).toggleClass('active');

    if ($menu.classList.contains('is-show')) {
        $menu.classList.remove('is-show');
    }
    else {
        $menu.classList.add('is-show');
    }
});

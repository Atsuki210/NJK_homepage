$(function () {
    $(window).scroll (function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 130},
        500);
    });
});

$(".floating").click(function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
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

$(window.addEventListener('scroll', function(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementByClassName("header").style.height = "120px";
        document.getElementByClassName("header-inner").style.height = "110px";
    }else{
        document.getElementByClassName("header").style.height = "80px";
        document.getElementByClassName("header-inner").style.height = "70px";
    }
}));
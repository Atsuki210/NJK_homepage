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

$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos-180}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

//ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用

function fadeAnime(){
    // flipLeft
    $('.gallery li').each(function(){ 
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('flipLeft');
        }else{
            $(this).removeClass('flipLeft');
        }
    });
    }
    
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまでページが読み込まれたらすぐに動かしたい場合の記述
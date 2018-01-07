let running = true;
var deg = 360 / $(".pic ul li").length; //size个数
$(".pic ul li").each(function(i) { //遍历

    //当前的li对象 添加css样式
    $(this).css({
        "transform": "rotateY(" + deg * i + "deg) translateZ(330px)"
    });
});

$.fn.snow({
    minSize: 10,
    maxSize: 15,
    newOn: 500,
    flakeColor: "#ffffff"
});

$(document).on('click', '.pic ul li', function() {
    var ddd = Math.floor(Math.random() * 360) + 1;



    if (running) {
        setTimeout(function() {
            running = false;
            $('.pic').removeClass('ani');
            $('.pic').css({"transform": "rotateY(" + ddd + "deg)"});
            // $(".pic ul li").each(function(i) { //遍历

            //     //当前的li对象 添加css样式
            //     $(this).css({
            //         "transform": "rotateY(" + ddd + "deg)"
            //     });
            // });
        }, 1000);
    } else {
        $('.pic').addClass('ani');
        running = true;
    }
});

$(".pic ul li img").hover(function() {
    $('.pic .tip').hide();
    $(this).parent().find('.tip').show();
});

var i = 0;
var str = "能够遇见你是我最大的幸运，对我来说，不是在最美好的时光遇见了你，而是遇见你后都是最美好的时光！";

window.onload = function typing() {
    //获取div
    var mydiv = document.getElementById("text");
    mydiv.innerHTML += str.charAt(i);
    i++;
    var id = setTimeout(typing, 100);
    if (i == str.length) {
        clearTimeout(id);
    }
}
window.onload = function() {
    $(".main-color").eq(0).css("display", "block");
    $("#main-ul>li").click(function() {
        console.log($(this));
        $(this).addClass("main-li");
        $(this).siblings().removeClass("main-li")
            // $(".main-color").eq($(this).index()).siblings().toggle();
        $(".main-color").eq($(this).index()).css("display", "block");
        $(".main-color").eq($(this).index()).siblings(".main-color").css("display", "none");
    })
}
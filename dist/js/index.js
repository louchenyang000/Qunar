window.onload = function() {
    $(".main-color").eq(0).css("display", "block");
    $("#main-ul>li").click(function() {
        // console.log($(this));
        $(this).addClass("main-li");
        $(this).siblings().removeClass("main-li")
            // $(".main-color").eq($(this).index()).siblings().toggle();
        $(".main-color").eq($(this).index()).css("display", "block");
        $(".main-color").eq($(this).index()).siblings(".main-color").css("display", "none");
    })
    $(".section").eq(0).css("display", "flex");
    $("#subNav>span").mouseover(function() {

        $(this).addClass("nav-border");
        $(this).siblings().removeClass("nav-border")
            // console.log($(this));
        $(".section").eq($(this).index()).css("display", "flex");
        $(".section").eq($(this).index()).siblings(".section").css("display", "none");
    })
    $("#subNav1>span").mouseover(function() {

        $(this).addClass("nav-border");
        $(this).siblings().removeClass("nav-border")
            // console.log($(this));
    })
    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
        "username": $.cookie("username"),
        "password": $.cookie("password"),
    }).then(data => {
        // console.log(data.data.username)
        // console.log(data);
        if (data.code == 1) {
            if (data.data.username == "") {
                $("#username").html(`请
                <a href="html/denglu.html"> 登录 </a>
                或<a href="html/zhuce.html"> 免费注册 </a>`)
                $(".introduce").html(`<figure>
                <a href="html/denglu.html">
                    <img src="images/sls.jpg" alt="">
                    <h4>少林寺</h4>
                    <p>登顶中岳嵩山，一览天下胜景，领略禅宗教法</p>
                    <b>￥80</b></a>
            </figure>
            <figure>
                <a href="html/denglu.html">
                    <img src="images/ltgy.jpg" alt="">
                    <h4>龙亭公园</h4>
                    <p>开封揽胜必游龙亭，中外游客向往之地</p>
                    <b>￥38.9</b></a>
            </figure>
            <figure>
                <a href="html/denglu.html">
                    <img src="images/qmshy.jpg" alt="">
                    <h4>清明上河园</h4>
                    <p>穿越宋朝，亲身体验清明上河图</p>
                    <b>￥113</b></a>
            </figure>
            <figure>
                <a href="html/denglu.html">
                    <img src="images/zlcssjq.jpg" alt="">
                    <h4>竹林长寿山景区</h4>
                    <p>回归自然，放飞心情，陶冶情操的佳处</p>
                    <b>￥35</b></a>
            </figure>
            <figure>
                <a href="html/denglu.html">
                    <img src="images/zzfthlsj.jpg" alt="">
                    <h4>郑州方特欢乐世界</h4>
                    <p>高科技主题乐园，方特成就欢乐梦想</p>
                    <b>￥280</b></a>
            </figure>
            <figure>
                <a href="html/denglu.html">
                    <img src="images/lmsk.jpg" alt="">
                    <h4>龙门石窟</h4>
                    <p>世界文化遗产 中国石刻艺术宝库</p>
                    <b>￥135</b></a>
            </figure>
            <figure>
                <a href="html/denglu.html">
                    <img src="images/kff.png" alt="">
                    <h4>开封府</h4>
                    <p>开封有个包青天，铁面无私辨忠奸</p>
                    <b>￥58.8</b></a>
            </figure>
            <figure>
                <a href="html/denglu.html">
                    <img src="images/zlcssjq.jpg" alt="">
                    <h4>竹林长寿山景区</h4>
                    <p>山势雄伟，美不胜收</p>
                    <b>￥89.1</b></a>
            </figure>`)
                return
            }
            let username = data.data.username
                // console.log(data);
            $.get("http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=8", {
                uid: 44084
            }).then(data => {
                // console.log(data);

                let str = ""
                data.data.forEach(element => {
                    // console.log(element);
                    str += `
                    <figure>
                        <a href="../html/xiangqing.html?pid=${element.pid}">
                        <img src="${element.pimg}" alt="">
                        <h4>${element.pname}</h4>
                        <p>${element.pdesc}</p>
                        <b>￥${element.pprice}</b>
                        </a>
                    </figure>`;
                    str1 = `<span>${data.data.username}</span>`
                });
                let moban = $("#username").html()
                let moban1 = $(".introduce").html()

                $("#username").html(`<span style="color:red;">热烈欢迎</span>　<a href="#" style="text-decoration:underline">${username}</a>　<button id="quit">退出</button>`)
                $(".introduce").html(str);
                $("#quit").click(function() {
                    console.log(1);
                    $.removeCookie("uid")
                    $.removeCookie("token")
                    $.removeCookie("username")
                    $.removeCookie("password")
                    $("#username").html(moban)
                    $(".introduce").html(moban1)
                    location.reload();


                })

            })
        }
    })
}
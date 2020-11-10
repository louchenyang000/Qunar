window.onload = function() {
    $("#text").css("display", "block")
    var flas6 = true; //标识符
    var flase6 = true; //标识符
    $("#phone").blur(function() {
        let tell1 = $("#phone").val(); //
        //以1开头的正则表达式
        let aa = /^1\d{10}$/

        if (tell1 == null || tell1 == "") {
            $("#text").css("display", "block").html("<i class='iconfont iconjinzhi'></i><b>用户名不能为空</b>")
            flas6 = false;
            return
        } else {
            $("#text").css("display", "none")
            flas6 = true;
        }

        if (!aa.test(tell1) || tell1.length != 11) {
            $("#text").css("display", "block").html("<i class='iconfont iconjinzhi'></i><b>请输入有效的手机号码</b>")
            flas6 = false;
            return;
        } else {
            $("#text").css("display", "none")
            flas6 = true;
        }

    })
    $("#password").blur(function() {
        let number = $("#password").val()
        let bb = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/
        if (number == "") {

            flase6 = false
            $("#text1").css("display", "block").html("<i class='iconfont iconjinzhi'></i><b>密码不能为空</b>")
        } else if (!bb.test(number)) {
            flase6 = false
            $("#text1").css("display", "block").html("<i class='iconfont iconjinzhi'></i><b>长度为8-16个字符且包含数字大小写</b>")
        } else {
            false6 = true
            $("#text1").css("display", "none")
        }

    })

    $("#btn").click(function() {

        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
            "username": $("#phone").val(),
            "password": $("#password").val()
        }, data => {
            if (data.code != 1 && flas6 != false) {
                // console.log(data)
                alert("该手机号已经注册，注册失败")
            } else if (data.code != 1 && flas6 == true && flas6 == false) {

                alert("用户名或密码输入有误，请重新输入")
            } else {
                alert("注册成功")
                location.href = "http://localhost:8080/html/denglu.html"
            }
        })
    })
}
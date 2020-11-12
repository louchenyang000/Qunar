 window.onload = function() {
     $("#right3").click(function() {
         $("#right1").toggle();
         $("#right2").toggle();
     })
     $("#landing").click(function() {
             $("#right1").toggle();
             $("#right2").toggle();
         })
         // 登录页面
     $("#btn1").click(function() {
         //  let zhang = $("#phone").val();
         //  let mi = $("#password").val()
         $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
             "username": $("#phone").val(),
             "password": $("#password").val()
         }, function(data) {
             if (data.code == 1) {

                 if ($("#checkbox") == true) {
                     $.cookie("uid", data.data.id, { expires: 7, path: "/", domain: "127.0.0.1", domain: "localhost" })
                     $.cookie("token", data.data.token, { expires: 7, path: "/", domain: "127.0.0.1", domain: "localhost" })
                     $.cookie("username", $("#phone").val(), { expires: 7, path: "/", domain: "127.0.0.1", domain: "localhost" })
                     $.cookie("password", $("#password").val(), { expires: 7, path: "/", domain: "127.0.0.1", domain: "localhost" })
                 } else {
                     $.cookie("uid", data.data.id, { path: "/", domain: "127.0.0.1", domain: "localhost" })
                     $.cookie("token", data.data.token, { path: "/", domain: "127.0.0.1", domain: "localhost" })
                     $.cookie("username", $("#phone").val(), { path: "/", domain: "127.0.0.1", domain: "localhost" })
                     $.cookie("password", $("#password").val(), { path: "/", domain: "127.0.0.1", domain: "localhost" })
                 }
                 location.href = "http://localhost:8080/index.html";

             } else {
                 alert(data.msg)
             }
         })
     })
 }
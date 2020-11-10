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

                 localStorage.setItem("username", data.data["username"]);
                 localStorage.setItem("UID", data.data["id"]);
                 localStorage.setItem("login", 1)
                 location.href = "http://localhost:8080/index.html";

             } else {
                 alert(data.msg)
             }
         })
     })
 }
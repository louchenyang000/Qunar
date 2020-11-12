window.onload = function() {

    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
        "username": $.cookie("username"),
        "password": $.cookie("password"),
    }).then(data => {
        // console.log(data.data.username)
        // console.log(data.data);

        if (data.code == 1) {
            if (data.data.username == "") {
                $("#username1").html(`请
                <a href="../html/denglu.html"> 登录 </a>
                或<a href="../html/zhuce.html"> 免费注册 </a>`)
            }
            let username = data.data.username
                // console.log(username);

            // console.log(data);

            $.get("http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=8", {
                uid: 44084
            }).then(data => {
                data.data.forEach(element => {
                    var url = location.search;
                    if (url.indexOf("?") != -1) {

                        var str = url.substr(1);
                        strs = str.split("=");
                        if (element.pid == strs[1]) {
                            $("#zoombox").html(`
                            <div class="section-fdj" id="zhongbox">
                            <img src="${element.pimg}" alt="">
                            <div id="zoom"></div>
                        </div>
                        <div id="dabox"><img src="${element.pimg}" alt=""></div>`)
                            $("#section-right").html(`

                        <h3>${element.pname}<span>5A景区</span></h3>
                        <p>${element.pdesc}</p>
                        <div><b>￥${element.pprice}</b><input type="button" data-id="${element.pid}" value="加入购物车" id="addBtn"></input>
                        </div>
                  
                        
                            `)
                        }
                        // alert(strs[1]);

                    }
                });
                console.log(data.data);

                $("#username1").html(`<span style="color:red">热烈欢迎</span>　<a href="#" style="text-decoration:underline">${username}</a>`)

                $("#addBtn").click(function() {
                    let id = this.getAttribute("data-id");
                    console.log(id);
                    // data.data.forEach(ietm => {
                    //     console.log(ietm.pid);
                    // })
                    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
                        "id": id,
                    }).then(data => {
                        console.log(data.data);
                        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
                            "pid": id,
                            "uid": data.data.uid,
                            "pnum": 1
                        }).then(i => {
                            console.log(i);
                            location.href = "../html/gouwuche.html?pid=" + data.data.uid
                        })
                    })
                })
            })

        }
    })



    // class Zoom {
    //     constructor() {
    //         this.zoombox = document.querySelector("#zoombox");
    //         this.zhongbox = document.querySelector("#zhongbox");
    //         this.zhongimg = this.zhongbox.children[0];
    //         this.zoom = document.querySelector("#endregionzoom");
    //         this.dabox = document.querySelector("#dabox");
    //         this.daimg = this.dabox.children[0];
    //     }
    //     start() {
    //         this.zhongbox.onmouseover = () => {
    //             this.zoom.style.display = "block";
    //             this.dabox.style.display = "block";
    //         };
    //         this.zhongbox.onmouseout = () => {
    //             this.zoom.style.display = "none";
    //             this.dabox.style.display = "none";
    //         };
    //         this.zhongbox.onmousemove = (e) => {
    //             let evt = e || event;
    //             let w = evt.pageX - this.zoombox.offsetLeft - this.zoom.offsetWidth / 2;
    //             let h = evt.pageY - this.zoombox.offsetTop - this.zoom.offsetHeight / 2;
    //             // console.log(this.zoombox.offsetLeft)
    //             let mw = this.zoombox.offsetWidth - this.zoom.offsetWidth;
    //             let mh = this.zoombox.offsetHeight - this.zoom.offsetHeight;
    //             w = w <= 0 ? 0 : w >= mw ? mw : w;
    //             h = h <= 0 ? 0 : h >= mh ? mh : h;
    //             this.zoom.style.left = w + "px";
    //             this.zoom.style.top = h + "px";

    //             this.daimg.style.left = -this.zoom.offsetLeft * this.daimg.offsetWidth / this.zhongimg.offsetWidth + "px";
    //             this.daimg.style.top = -this.zoom.offsetTop * this.daimg.offsetHeight / this.zhongimg.offsetHeight + "px";

    //         }
    //     }
    // }

}
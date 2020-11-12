//登陆接口
// $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
//         "username": "loulou",
//         "password": "666666"
//     }).then(data => {
//         if (data.code == 1) {
//             let username = data.data.username
//                 // let uid = $.cookie("uid")
//                 // console.log(data.data.username);
//             $.get("http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=8", {
//                 uid: 44084
//             }).then(data => {
//                 // console.log(data);

//                 let str = ""
//                 data.data.forEach(element => {
//                     // console.log(element);
//                     str += `<figure>
//         <a href="">
//             <img src="${element.pimg}" alt="">
//             <h4>${element.pname}</h4>
//             <p>${element.pdesc}</p>
//             <b>￥${element.pprice}</b></a>
//     </figure>`;
//                     str1 = `<span>${data.data.username}</span>`
//                 });
//                 console.log(username);
//                 let moban = $("username").html()
//                 let moban1 = $(".introduce").html()
//                 $("#username").html(`<a href="#">${username}</a><button id="quit">退出</button>`)
//                 $(".introduce").html(str);

//                 $("#quit").click(function() {
//                     console.log(1);
//                     $.removeCookie("uid")
//                     $.removeCookie("token")
//                     $.removeCookie("username")
//                     $("#username").html = moban
//                     $(".introduce").html = moban1
//                 })
//             })
//         }
//     })
//根据商品id获取商品详情接口
// $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
//     uid: 44084
// }).then(data => {
//     console.log(data);
// })


//添加商品接口
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//     pimg: "//imgs.qunarzz.com/sight/p0/1910/78/78db4cdeca88e867a3.water.jpg_262x238_3ccbccdd.jpg",
//     pname: "龙亭公园",
//     pprice: "200",
//     pdesc: "开封揽胜必游龙亭，中外游客向往之地",
//     uid: 44084
// }).then(data => {
//     console.log(data);
// })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "//imgs.qunarzz.com/sight/p0/201405/27/544cae2aeb173cb6533ce6926b68f153.jpg_256x144_55bd0f4f.jpg",
//         pname: "清明上河园",
//         pprice: "113",
//         pdesc: "穿越宋朝，亲身体验清明上河图",
//         uid: 44084
//     }).then(data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "//imgs.qunarzz.com/sight/p0/1811/6c/6cbe2a1a22e6bab2a3.img.jpg_256x144_273c9942.jpg",
//         pname: "竹林长寿山景区",
//         pprice: "35",
//         pdesc: "回归自然，放飞心情，陶冶情操的佳处",
//         uid: 44084
//     }).then(data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//     pimg: "//img1.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_256x160_2ea35e2a.jpg",
//     pname: "郑州方特欢乐世界",
//     pprice: "280",
//     pdesc: "高科技主题乐园，方特成就欢乐梦想",
//     uid: 44084
// }).then(data => {
//     console.log(data);
// })










//删除商品 接口
// $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php", {
//     uid: 44084,
//     pid: 344800,
//     token: 6dbd564690c2b8526da82cd740c59d49"
// }).then(data => {
//     console.log(data);
// })

//修改商品 接口
// $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-update.php", {
//     pid: 344800,
//     pname: "少林寺",
//     pprice: "100",
//     pdesc: "登顶中岳嵩山,一览天下胜景,领略禅宗教法",
// }).then(data => {
//     console.log(data);
// })
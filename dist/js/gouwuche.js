var url = location.search;
if (url.indexOf("?") != -1) {

    var str = url.substr(1);
    strs = str.split("=");
    console.log(strs[1]);
    let uid = strs[1]

    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        "id": uid
    }).then(data => {
        console.log(data.data);
        let str = ""
        let str1 = ""
        data.data.forEach(element => {
            console.log(element.pnum * element.pprice);
            let str2 = element.pnum * element.pprice
            str += `<li>
            
            <div><input type="checkbox"></input>${element.pname}</div>
            <div><img src=${element.pimg}></div>
            <div>${element.pdesc}</div>
            <div>${element.pnum}</div>
            <div>${element.pprice}</div>
            <div>${str2}</div>
            <button class="delete">删除</button>
            </li>
            `;
            str1 += str2 + "+"
                // console.log(str1);
            console.log($(".delete"));
        });
        $("#zongjia").html(`商品总价<span>${str1}</span>`)
        $("#cartList").html(str)
        console.log($("#delete"));
        $(".delete").forEach(i => {
            console.log(1);
        })
    })
}
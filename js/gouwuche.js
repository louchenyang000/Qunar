let uid = $.cookie("uid")
$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
    "id": uid
}).then(data => {
    console.log(data.data);
    let str = ""
    let str1 = []
    let sum = 0
    data.data.forEach(element => {
        // console.log(element.pnum * element.pprice);
        let str2 = element.pnum * element.pprice
        str += `<li>
            
            <div><input type="checkbox"></input>${element.pname}</div>
            <div><img src=${element.pimg}></div>
            <div>${element.pdesc}</div>
            <div><span class="minus">-</span> ${element.pnum} <span class="plus">+</span></div>
            <div>${element.pprice}</div>
            <div>${str2}</div>
            <button class="delete" data-id="${element.pid}">删除</button>
            </li>
            `;
        str1.push(str2)
        console.log(str1);



    });
    if (str1.length >= 1) {
        str1.forEach(res => {
            // console.log(data);
            sum += res
        })
    } else {
        sum = 0
    }
    $("#zongjia").html(`商品总价<span>${sum}</span>元`)
    $("#cartList").html(str)
        //删除
    $(".delete").each(i => {
        // console.log(i);
        console.log(data.data[i]);
        $(".delete").eq(i).click(function() {
            $(this).parent().remove()
            console.log($(this).attr("data-id"));
            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                "uid": uid,
                "pid": $(this).attr("data-id")
            }).then(res1 => {
                console.log(res1);

                console.log(data.data[i].pprice);
                $("#zongjia").html(`商品总价<span>${sum-data.data[i].pprice}</span>元`)
            })

        })

    })
})
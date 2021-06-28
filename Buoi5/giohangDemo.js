let a, b = 0,
    x = 0,
    y = 0,
    z = 0,
    sai = 0
let giohang = [ga = {
    ten: "thitga",
    gia: 1000,
}, lon = {
    ten: "thitlon",
    gia: 2000,
}, cho = {
    ten: "thitcho",
    gia: 3000
}]

do {
    a = prompt("Có 3 loại thịt là : gà(1000) , lợn(2000) , chó(300) .Mời bạn chọn mua : ")
    if (a == "thoi") {
        break
    } else {
        b = prompt("nhap so luong")
        if (a == giohang[0].ten) {
            x = parseInt(giohang[0].gia) * parseInt(b)

        } else if (a == giohang[1].ten) {
            y = parseInt(giohang[1].gia) * parseInt(b)

        } else if (a == giohang[2].ten) {
            z = parseInt(giohang[2].gia) * parseInt(b)
        } else {
            sai = a
            for (let i = 0; i < 10; i++) {
                if (sai != 0) {
                    console.log("không có", sai);
                    break
                }
            }
        }
    }
} while (a != "thoi")
// console.log(a);
// console.log(b);
console.log("Bạn mua : ", x / parseInt(giohang[0].gia), "con gà,", y / parseInt(giohang[1].gia), "con lợn và ", z / parseInt(giohang[2].gia), "con chó .\n Tổng số tiền bạn phải trả là :", parseInt(x) + parseInt(y) + parseInt(z));
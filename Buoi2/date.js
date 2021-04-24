h
do {
    // step input
    var y = prompt("nhap nam")
    var m = prompt("nhap thang")
    var d = 0
    // proxess
    switch (parseInt(m)) {
        case 1:
            d = 31
            break
        case 2:
            if (y % 400 == 0 || ((y % 4 == 0) && (y % 100 != 0))) {

                d = 29
                break
            } else {
                d = 28
                break
            }
        case 3:
            d = 31
            break
        case 4:
            d = 30
            break
        case 5:
            d = 31
            break
        case 6:
            d = 30
            break
        case 7:
            d = 31
            break
        case 8:
            d = 31
            break
        case 9:
            d = 30
            break
        case 10:
            d = 30
            break
        case 11:
            d = 30
            break
        case 12:
            d = 31
            break
    }
    
    
    if (parseInt(m) <= 0 || parseInt(m) > 12) {
        console.log("thang khong ton tai");
    } else {
        console.log(typeof (m));
        console.log("Tháng " + m + " năm " + y + " có số ngày trong tháng là :" + d);
    }

} while (parseInt(m) <= 0 || parseInt(m) > 12);
// == va ===
// == bang ve gia tri 
// === bang ve gia tri va kieu du lieu
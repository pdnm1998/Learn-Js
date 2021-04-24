var a = prompt("nhap a")
var b = prompt("nhap b")
var m = a
var n = b
var x
if (a == 0 || b == 0) {

    console.log("so thu nhat :" + m);
    console.log("so thu hai :" + n);
    console.log("UCLN cua 2 so la : " + (a+b));
    console.log("BCNN cua 2 so khong ton tai ");
}
else {
    while (a % b != 0) {
        r = a % b
        a = b
        b = r
    }
    console.log("so thu nhat :" + m);
    console.log("so thu hai :" + n);
    console.log("UCLN cua 2 so la : " + b);
    console.log("BCNN cua 2 so la : " + ((m * n) / b));
}

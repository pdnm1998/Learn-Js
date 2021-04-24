var a = 1
var b = 1
var n = prompt("nhap so fibonacci can tim :")
for (var i = 1; i <= 10; i++) {
    console.log(a);
    console.log(b);
    a = a + b
    b = a + b
    // if (n == i) {
    //     if (i % 2 == 0) {
    //         console.log("so can tim la :" + b);
    //     } else
    //         console.log("so can tim la :" + a);
    // }
}
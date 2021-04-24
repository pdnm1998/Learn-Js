// var tong = 0
// // for(khai báo biến ; điều kiện dừng ; biểu thức thay đổi giá trị)
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0)
//         tong = tong + i;//state
// }
// console.log(tong)
//Lan 1 : i=0 ; i<=10 => true => state
//Lan 2 : i+1=1; i<=10 =>true => state
//Lan 3 : i+1=2; i<=10 =>true => state
//...
//Lan 11 : i+1=10; i<=10 => true=>state
//Lan 12 : i+1=11 i<=10 => false=>stop

// while (dieu kien)
// {state}

// var num = 1
// while (num <= 1000) {
//     num++
//     if (num == 5) {
//         break
//     }
// }
// console.log(num);
// var num = 2
// while (num <= 1000) {
//     if (num * 2 > 1000) {
//         break
//     }
//     num *= 2
// }
// console.log(num);

// 1--1000

// for (var i = 1; i <= 1000; i++) {
//     if (i % 14 == 0&&i!=14) {
//         console.log(i);
//         break
//     }
// }
// continue
// for (var i = 1; i <= 1000; i++) {
//     if (i % 14 == 0) {
//         console.log(i);
//         continue
//     }

// }
//for(){ for() ...}
for (var i = 0; i < 5; i++) {
    for (j = 0; j < 4; j++) {
        for (k = 0; k < 3; k++) {
            console.log("i=", i, "j=", j, "k=", k)
        }
    }
}
// mảng có thể lưu được tất cả các giá trị của phần tử trong nó
// đánh số tứ tự từ 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];    
}
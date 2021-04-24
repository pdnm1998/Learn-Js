// Array là một chuỗi các giá trị liên tiếp trong bộ nhớ  

var a = [5, "hello", true, false, 55];

// console.log(a[0]);
// console.log(a);
// console.log(a.length);

// for (i = 0; i < a.length; ++i) {
//     console.log(a[i])
// }

var i = 0
while (i < a.length) {
    console.log(a[i]);
    ++i
}

//a.forEach()
// Callback là : tham số chuyền vào là một Funtion
function x(a) {
    a()
}
x(function () {
    console.log("hello");
})
console.log("==========================");

// a.forEach()

a.forEach(function (value, index) {
    console.log(index, value * 2);
})

// Search tuyen tinh

for (let i = 0; i < a.length; i++) {
    if (a[i] == "hello") {
        console.log("Tim thay hello o vi tri thu ", i);
    }
}

// Binary search

// min / max 
//max
let num = [3, 5, 23, 9, 1, 2,6 , 23, 9, 3, 6, 7]
let max = num[0]

// kỹ thuật cắm cờ 

for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
        max = num[i]
    }
}
console.log(max);
for (let i = 0; i < num.length; i++) {
    if (num[i] == max) {
        console.log("gia tri max ", i);
    }
}

//min 

var min =num[0]
for (let i = 0; i < num.length; i++) {
    if (min > num[i]) {
        min = num[i]
    }
}
console.log(min);

// Khởi tạo mảng bằng for

let mang = []
for (let i = 0; i < 10; i++) {
    mang[i]=5000
}
console.log(mang);

// Push : thêm 1 giá trị vào cuối mảng 

mang.push(5)
console.log(mang);

// Pop : lấy ra 1 giá trị ở cuối mảng 

mang.pop()
console.log(mang);

// Unshift :thêm 1 giá trị vào đầu mảng 

mang.unshift(555)
console.log(mang);

// Shift : lấy ra 1 giá trị ở đầu mảng

mang.shift()
console.log(mang);
 
// Sort : 

 let mangsort = [1,2,5,3,6,8,0,333,34]
 mangsort.sort()
 console.log(mangsort); 

 // find 



 // index of 


 // Map , filter , reduce , ...
 // Concat ; CopyWithin ; ...

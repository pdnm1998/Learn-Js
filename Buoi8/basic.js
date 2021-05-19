// Declare variable - Khai bao bien

/*
    var => hoisting => cac bien duoc day len tren day
    let => scope {} closure
    const
*/
var a = 7; // 5.6 
var x = "Hello";
var isHandsome = true;
var students = ["Toan", "Hien"];
var k = 12
if (true) {
    let k = 10;
}
let person = {
    fullName: "Nguyen Duc Hanh",
}

// console.log(k); no use // khong duoc su dung

const PI = 3.14; // access but no redefined


// Conditional - Dieu kien

if (5 > 2) {
    //True Statement
    console.log("Hello");
} else {
    // False statement
    console.log("Sai roi");
}

if (5 < 2) {
    console.log("Running");
} else if (5 < 4) {
    console.log("Running");
} else if (5 < 1) {
    console.log("Running");
} else {
    console.log("Something else");
}

// Switch case


switch (5) {
    case 1:
        console.log("hello");
    case 5:
        console.log("hi");
        break;
    case 5:
        console.log("Runinggg");
        break;
    default:
        console.log("Defautl");
}

// Loop - Vong lap

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 123 => 123 %  10= 3 => parseInt(123/10) = 12 => .
// Expected : 321
while (i < 10) {
    i++;
    console.log(i);
}
// arr 
for (const value of arr) {

}

for (const key in object) {

}
// for..in : 
// for..of :


// Array
// [1,2,3] => [1,4,9]
/*
    .pop() : xoa phan cuoi
    .push(gia tri) : day phan tu moi vao cuoi
    .shift():  day phan tu dau
    .unshift(): day vao dau
    .indexOf(gia tri can tim) : vi tri dau tien xuat hien
    .sort(): sap xep mang
    .forEach(function(value) { -value- })
    .filter(function(value) { -return dieu kien ma chung ta muon loc- })
    .map(function(value) { -return Math.pow(value, 2) - })
    .reduce(function(val, total) {}, 0)
*/

// Object

let hanh = {
    fullName: "Nguyen Duc Hanh",
    address: "Thai Nguyen",
    greeting: function() {
        console.log("Hello");
    }
}

hanh.greeting()

// Function

function sum(a, b) {
    return a + b;
    console.log(a + b);
}

let a = sum(5, 10) // undefined


//
// khai báo biến 
/*
var => hoisting => các biến dược đẩy lên đầu 
let => scope {} closure
const
*/
var a = 7
if (true) {
    let b = 5
}
const PI = 3.14

// Điều kiện 
if (true) {
    console.log("a");
} else if (true) {
    console.log("b");
}
// Switch case 
switch (5) {
    case 1:
        console.log("1");

        break;
    case 5:
        console.log("5");
        break
    case 2:
        console.log("2");
        break
    default:
        console.log("hi");
        break;
}
//loop - vong` lap.
let i
while (i<10) {
    i++
    console.log(i);
}
// for .. in : lay' ra key cua? object
for (const key in object) {

}

// for ..of : dung` voi' array
for (const value of arr) {
    
}
 
// Array 
/*
pop(): xoa' phan` tu? cuoi'
push(value): day? phan` tu? vao` cuoi'
shift(): day? phan` tu? dau` 
unshift(): xoa' phan` tu? dau` 
indexOf (gia' tri. can` tim`) : vi. tri' dau` tien xuat' hien.
sort(): sap xep mang?
forEach(funtion(value){-value-})
filter(funtion(value){return dieu` kien.}
map (funtion(value){return cong thuc' moi'})
reduce(funtion(val,total){},0)
*/

//Object
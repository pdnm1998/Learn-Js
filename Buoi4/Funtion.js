var a = 5
var b = 9
var c = 9

// Funtion 

function max(params) {
    if (a > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

// Gọi hàm 

max()

function hello(params, a, b) {
    console.log("xin chào", params, a);
}

// params là tham số chuyền vào 
// truyền 1 params 

hello("minh")
infor("hanh", "thai nguyên", 113)
// Truyền nhiều params 
function infor(name, address, sdt) {
    console.log("Xin chào", name, address, sdt);
    var x = 3
    console.log(x);
}
function add(a, b=9) {
    let c = a + b
    return c
}
console.log(add());

function light(x) {
    if (x=="hong") {
        console.log("den hong");
        return 
    }
    if (x) {
        console.log("den bat");
        return
    }else{
        console.log("den tat");
        return
    } 
    console.log("hello");
    // return undefined = return
}
light(false)

 
// funtion expresstion
let sum = function name(a,b) {
    return a+b
}
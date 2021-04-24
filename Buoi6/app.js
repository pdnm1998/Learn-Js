let products = [{
    id : 45,
    name :"Banh mi nho",
    price: 20000
},{
    id : 2323,
    name :"Trung vo xanh",
    price: 80000
},{
    id : 23324,
    name :"Xuc xich",
    price: 30000
},{
    id : 333232,
    name :"Kem",
    price: 10000
}]

let carts = [{
    soLuongMua: 2,
    id: 2323
}, {
    soLuongMua: 5,
    id: 333232
}];
let total = 0;
carts.forEach(function(cart) {
    let findedProduct = products.find(function(value) {
        return value.id == cart.id;
    })
    total += cart.soLuongMua * findedProduct.price;
})
console.log(total);
let thanhTien = carts.reduce(function(total, cart) {
    let findedProduct = products.find(function(value) {
        return value.id == cart.id;
    })
   return total + cart.soLuongMua * findedProduct.price;
}, 0)
console.log(total);

// let num = [2,3,5,7,8];

// let object = {
//     0: "Hanh",
//     1: "Hieu",
//     2: "Yen" 
// }
// DOM
let a = [1,2,3,4]
console.log(a);
let b = [10,2000, ...a]; // [10, 2000, 1,2,3,4]
// b[0] = 10 
console.log(b);

let x = {
    id: 100
}
let y = Object.assign({name : "HANH"}, x);
y.id = 1000;
console.log(y);
console.log(x);


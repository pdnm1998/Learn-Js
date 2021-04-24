// Reference type and Primitive Type 

// Primitive Type : value được lưu trong 1 vùng nhớ cố định
// Giá trị của biến được lưu trong bộ nhớ

let a = 2
let b = a
b = 3
console.log(a, b);

// Reference type : Lưu địa chỉ dữ liệu chứ không lưu value , 
// Nên khi copy reference , sẽ copy địa chỉ bộ nhớ .Nên khi thay đổi giá trị trong địa chỉ sẽ đổi cả 2 mảng cùng địa chỉ
let x = [1, 4, 6, 3, 7, 3]
let y = x
y[0] = 3
console.log(x, y);
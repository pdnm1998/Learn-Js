// Map : Tạo mảng mới theo 1 công thức 
// Trả về element mới cho mảng mới
// Và giữ nguyên Length ở mảng nguồn 
let a = [2, 7, 1, 5, 3]

//let b = a.map(value => value*2) : arow funtion

let b = a.map(function (value, index) { // Hashes
    console.log(index);
    return value + value * 0.05
})
console.log(b);

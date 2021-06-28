// filter : Trả về element mới cho mảng mới
// Mảng mới thỏa mãn điều kiện của hàm
// Và có thể GIẢM Length của mảng nguồn
//Giá trị trả 
let a = [2, 7, 1, 5, 3]

// let b = a.filter(x => x > 1 && x < 7)

let b = a.filter(function callback(value, index) {
    if (value % 2 == 0) {
        return true
    }
})
console.log(b);
// Reduce : Tính tổng hợp các value trong mảng theo ý muốn 
let a = [2, 7, 1, 5, 3]

// let sum = 0
// for (let n of a) {
//     sum += n
//     console.log(sum);
// }

//let sum = a.reduce((pre, cur) => accumulator + curentValue)

let sum = a.reduce((pre, cur) => {
    console.log(pre);
    console.log(cur);
    return pre + cur
},0)
console.log(sum)


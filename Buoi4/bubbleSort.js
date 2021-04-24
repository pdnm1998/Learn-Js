let a = [2, 5, -4, 8, -1, -9, 0, 4, 6, 2, 7, 5, 3]
let num
for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j <a.length ; ++j) {
        if (a[j] > a[j + 1]) {
            let num = a[j]
            a[j] = a[j + 1]
            a[j + 1] = num
        }
    }
}
console.log(a);
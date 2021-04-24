let a=[1,8,4,7,4,2,7,9,2,4,7,2]
a.sort(function (a,b) {
    return a-b;// Tăng dần
    //return b-a;// Giảm dần
})
console.log(a);
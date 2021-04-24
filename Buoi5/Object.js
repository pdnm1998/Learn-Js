// Khai báo Object
// key : value
let Vit = {
    color: ["Black", "red", "blue",],
    age: 5,
    isFly: false,
    speak: function () {
        console.log("Quac Quac");
        return "keu gi"
    },
    intro: function () {
        console.log("toi co nhieu mau sac", this.color.join("+"));
        return 0
    }
}
let a = [5, 7, 3]
console.log(Vit);
// console.log(typeof a);
// console.log(Vit.speak());
// console.log(Vit.intro());

for (const key in Vit) {
    if (typeof Vit[key] == "function") {
        console.log(key, Vit[key]());
    }
    else {
        console.log(key, Vit[key]);
    }

}
//  let b = [1,3,6,8,3,8,2]
//  console.log(b.indexOf(6));
let arr = {
    value: [1, 3, 6, 8, 3, 8, 2],
    length: 7,
    indexOf: function (gt) {
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] == gt) {
                return i
            }
        }
        return -1
    },
    push: function (gt) {
        this.value[this.length] = gt+10
        this.length++;
    }

}
console.log(arr.value);
console.log(arr.indexOf(6));
arr.push(100000);
console.log(arr.value);
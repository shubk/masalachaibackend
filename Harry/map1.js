const prompt = require("prompt-sync")({ signit: true })
let arr = [45, 23, 21]
// console.log("value ||" + " index ||" + " array ")
// console.log("========================")

// let a = arr.map((value, index, array) => {
//     console.log(value + "       " + index + "      " + array)
//     return value + 1;
// })

//Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
// let a = arr2.filter((a) => {
//     return a > 10;

// })
// console.log(a)

let re = arr2.reduce((h1, h2) => {
    return h1 + h2;
})
// console.log(re)
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 670]
// console.log(arr3)
let a;
// do {
//     a = prompt("Enter a Number  :")
//     a = Number.parseInt(a)
//     arr3.push(a)
//     console.log(arr3)

// } while (a != 0)

// let n = arr3.filter((x) => {
//     return x % 10 == 0;
// });
// console.log(n);

// let sq = arr3.map((x) => {
//     return x * x;

// });
// console.log("Suare of the array using map:")
// console.log(sq)

//Use reduce to get the sum of n natural numbers
// let arrr = [1, 2, 3, 4, 5, 6]
// let n = arrr.reduce((x1, x2) => {
//     return x1 * x2;
// })
// console.log(n)

//using console.objects like tab;le
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.table(obj)

//console.warn()
// console.warn("Hey dont do this !")
// console.table(console)

// If u want to detrmine ho wlong it took to runt the loop
console.time("forLoop")
for (let i = 0; i < 29; i++) {
    console.log(233)
}
console.timeEnd("forloop");
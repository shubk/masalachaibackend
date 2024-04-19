let num = [3, 2, 4, 5, 6, 7, 8]

// num.forEach((x) => {
//     console.log(x * x)
// })

//convert an Object into an Array
// let name2 = "shubhada"
// let arr = Array.from(name2)
// console.log(arr)

// const arr = [1, 2, 3, 4, 5]

// console.log("index |  value ")
// console.log("=============")
// arr.forEach(function (value, index) {
//     console.log(" | " + index + "  |   " + value + " | ")
// })
// const arr = [1, 2, 3, 4, 5]
// const mappedArray = arr.map(function (index, value, array) {
//     return value + index + this.num;
// }, { num: 10 })
// console.log(mappedArray)

// const arr = [1, 2, 3, 4, 5]
// console.log("Filter array")
// const filterArray = arr.filter(function (value, index, array) {
//     return value > (this.num + 1);
// }, { num: 1 })
// console.log(arr)
// console.log(filterArray)


// const arr = [1, 2, 3, 4, 5]
// const foundIndex = arr.findIndex(function (value, index, array) {
//     return value > this.num;
// }, { num: 1 })

// console.log(foundIndex)

// const arr = [1, 2, 3, 4, 5]
// const allPass = arr.every(function (value, index, array) {
//     return value > this.num;
// }, { num: 1 })

// console.log(allPass)


// const arr = [1, 2, 3]
// const somethingPasses = arr.some(function (value, index, array) {
//     return value > this.num;
// }, { num: 4 })
// console.log(arr)
// console.log(somethingPasses)

// const arr = [1, 2, 3]
// const sum = arr.reduce(function (accumulator, currValue) {
//     return accumulator + currValue;
// }, 0)
// console.log(arr)
// console.log(sum)

// const arr = [10, 5, 9, 3]
// arr.sort();
// console.log(arr)

// comapring two numbers 
// const arr = [3, -5, 8, 4]
// console.log(arr)
// arr.sort(compareNumbers);
// function compareNumbers(fNumber, sNumber) {
//     return fNumber - sNumber;
// }
// console.log(arr)

//Compariing numbers in descending order
const arr = [5, 7, 3, 0]
arr.sort(compareNumbers)
function compareNumbers(fnum, snum) {
    return snum - fnum;
}
console.log(arr)
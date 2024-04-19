const nums = [1, 2, 3, 4, 5, 6, 8]
//initial vale is zero
// const result = nums.reduce((prev, current) => prev + current, 0)

// console.log(resultarrays)

// sum oof all even numers
// const evenNums = nums.filter(v => v % 2 == 0).reduce((prev, cuurent) => prev + cuurent, 0)
// console.log(evenNums)
const result = nums.reduce((prev, c) => {
    if (c % 2 == 0)
        return prev + c;
    return prev;
}, 0)

console.log(result)

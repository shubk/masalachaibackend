let num = [1, 3, 4, 6, 5, 2]

let b = num.toString()
console.log(typeof b);
let c = num.join(" * ")
console.log(c)

//Pooping out of the box 
num.pop()
console.log(num)
let r = num.push(56)
console.log(num, r)

//Shift and unshift 
console.log("shift removes the first element")
console.log(num.shift())
console.log("unshift adds the first element ")
console.log(num.unshift(5))
console.log(num)



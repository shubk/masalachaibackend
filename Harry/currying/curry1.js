//1. 1make sum or subtract function 
//2. make a curry functionn, make it return another function

function sum(a, b, c) {
    return a + b + c;
}

function subtract(a, b, c) {
    return a - b - c;
}
// function curry(func) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return func(a, b, c);
//             }
//         }
//     }
// }
function curry(func) {
    return (a) => {
        return (b) => {
            return (c) => {
                return func(a, b, c);
            }
        }
    }
}

const curriedSubtract = curry(subtract)
console.log(curriedSubtract(1)(2)(3))
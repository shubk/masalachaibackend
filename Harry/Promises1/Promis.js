// Promises from ALgoExpert

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 500);
// })

// console.log(promise)
// setTimeout(() => console.log(promise), 600);

// ANother form of Promise

// const promise = Promise.resolve(3);

// console.log(promise);

// promise.then(value => value * 2).then(value => value + 2).then(console.log);

//  Multiple Promises
const promise = Promise.resolve(3);

// Promise.all([
//     new Promise((res, rej) => setTimeout(() => res(3), 3000)),
//     new Promise((res, rej) => setTimeout(() => res(2), 200)),
//     new Promise((res, rej) => setTimeout(() => rej('Oh No...'), 1000))
// ]).then(console.log)
//     .catch(() => console.log('All Rejected state '))

// a function 
// function tester() {
//     return 3;
// }
// console.log(tester())

// // asych 
// async function tester() {
//     return 3;
// }
// console.log(tester())

// asych and await

async function tester() {
    const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000))
    console.log(value)
}

tester();
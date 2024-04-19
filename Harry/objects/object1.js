const myKey = 'key';
// const website = {
//     name1: 'Algoexpert',
//     rating: 5,
//     founders: ['red', 'yellow', 'green'],
//     'myKey': 5,
// 'nam1-something': "yahoo"
// }
// console.log(website)
// console.log(website.name1)
// console.log(website['name1'])
// console.log("when to use [] notation ...whne there is - in name-some")
// console.log(website['nam1-something'])
//we can also add properties to the Object later
// website.foo = 'nothing great!';
// console.log(website)
// //now delete the element 
// delete website.foo;
// console.log(website)

// console.log({} === {})

// adding annonymous function to the Object
// const website = {
//     name: 'Algoexpert',
//     rating: 5,
//     founders: ['shubhada', 'antony'],
//     sayHello: () => console.log("Hello World!!"),
//     get getRating() {
//         return this.rating;
//     },
//     set setRating(value) {
//         this.rating = value;
//     }
// }
// website.sayHello();
// console.log(website.getRating);
// website.setRating = 8;
// console.log(website.getRating)

//How to iterate the objects
const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['shubhada', 'katke']
}

const obj = {
    foo: 'bar',
    hello: 'world',
    [Symbol('id')]: 0,
    __proto__: website
}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj.__proto__))

// Object.entries(obj).forEach(function (value) {
//     console.log(value);
// })

//Using destructuring 
// Object.entries(obj).forEach(function ([key, value]) {
//     console.log(key, value)
// })

// for (key in obj) {
//     console.log(key)
// }

//To copy from Object from one to another Target 
const copyTarget = {
    original: 123
}
Object.assign(copyTarget, obj)
console.log(copyTarget)
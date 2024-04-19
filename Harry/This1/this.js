'use strict'

// console.log(this)

function logThis() {
    console.log(this)
}

// logThis()

// const obj = {
//     num: 10,
//     logThis
// }

// obj.logThis();

//foreach loop
// [1, 2, 3].forEach(function (num) {
//     console.log(this);
//     console.log(num)
// }, { num: 13 })

class Person {
    constructor(name) {
        console.log(this)
        this.name = name;
    }
    speak() {
        console.log('Hello I am ...' + this.name)
    }
}
const shubhada = new Person('Shubhada')
shubhada.speak()
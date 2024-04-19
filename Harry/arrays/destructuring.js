// lets make an 
const fruits = ["apple", "banana", "oranges", "grapes"]

// const [a, b, c] = fruits;
// console.log(a, b, c)

//directly get the third place, by just adding comma
// const [, , z] = fruits
// console.log(z);

// Rest operator
// let [a, b] = fruits.reverse();

// [b, a] = [a, b];

// console.log(a)
// console.log(b)

// lest use a spread operator
// let [...c] = [1, 2, 3, 4, 5];

// [second, first] = [1, 2, 3, 4]
// console.log(second);
// console.log(first)

// console.log(c)

// Rest and Spread Operator:
// let [a, ...c] = fruits;

// console.log(c);
// const x = [...c, "ballo", "pillo"]
// console.log(x)

// Us ereference data types
const person = {
    name: "Piyush",
    age: 24
}
const copy = { ...person }
person.name = "Laddo";
console.log(copy)
console.log(person)
// const globalNum = 5;

// function logNum() {
//     const localNum = 1;
//     console.log(globalNum + "  " + localNum)
// }

// logNum();

// iterating thru th eloop using setTimeout()

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 500)
}
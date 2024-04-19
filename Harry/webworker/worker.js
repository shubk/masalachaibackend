
self.addEventListener('message', event => {
    console.log(event.data)
    postMessage(event.data * 10)
})

// onmessage = function (event) {
//     console.log(event.data)
// }
// for (let i = 0; i < 300000; i++) {
//     1 + 2;
// }
console.log('Slow Operation finished')
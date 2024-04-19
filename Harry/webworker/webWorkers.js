const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello')

slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);

function slowOperation() {
    // // now hget a webworker
    // const worker = new Worker('worker.js');
    // move the foll code in worker.js file 
    // for (let i = 0; i < 300000; i++) {
    //     1 + 2;
    // }
    // console.log('Slow Operation finished')
    // worker.postMessage(10)
    //listeen to message sent by worker
    // worker.addEventListener('message', event => {
    //     console.log(event.data)
    // })
    // worker.terminate()

    const worker = new SharedWorker('worker.js');
    worker.port.postMessage(10)

    worker.port.onmessage = function (event) {
        console.log(event.data)
    }

}

function sayHello() {
    console.log('Hello World')
}
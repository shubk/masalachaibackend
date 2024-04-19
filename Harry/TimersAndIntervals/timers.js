const start = document.getElementById('start')
const stop = document.getElementById('stop')
const count = document.getElementById('count')

start.addEventListener('click', startTime)
stop.addEventListener('click', stopTime)

let timerId;
// function startTime() {
//     window.setInterval(() => {
//         console.log('starting')
//     }, 500)
// }

function startTime() {
    timerId = setInterval(() => {
        count.textContent++;
    }, 500)
}
function stopTime() {
    clearInterval(timerId);
}
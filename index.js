require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('shubhada-k')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at masaalachai!! </h1')
})
app.get('/youtube', (req, res) => {
    res.send('<h1> You are in youtube </h1>')
})
// the 2nd func is a callback
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
//ssds'


// Now afte env installation, i wil modify the listen
app.listen(process.env.PORT, () => {
    console.log(`Example App listenening ${port}`)
})
const express = require("express");

const app = express()

const PORT = process.env.port || 4000

app.use(express.static('public'))

app.get('/api/v1', (req, res) => {
    res.send({
        working: true
    })
})

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/content', (req, res) => {
    res.sendFile(__dirname + '/public/content.html')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
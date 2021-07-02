// require
const express = require('express')
const app = express()
require('dotenv').config()
const models = require('./models/Index.js')
const PORT = 3000

// middleware
app.use(express.urlencoded({extended:false}))

//GET route "/" for home maybe?
app.get('/',(req, res)=> {
    res.send("testing Home")
})


// GET route /blog route -- lists all blog post
app.get('/blog',(req, res) => {
    res.send("testing Blog get")
})

// POST route /blog route -- adds new blog post
app.post('/blog',(req, res) => {
    res.send("testing Blog Post")
})

// GET route /blog/:id -- shows one blog post
app.get('/blog/:id',(req, res) => {
    res.send("testing Blog id")
})

// PUT route /blog/:id -- updates one blog post
app.post('/blog/:id',(req, res) => {
    res.send("testing Blog id post")
})

// DELETE route /blog/:id -- deletes one blog post
app.delete('/blog/:id',(req, res) => {
    res.send("testing Blog id delete")
})

app.listen(PORT, () => console.log(`listening to the smoooth sounds of ${PORT}!`))
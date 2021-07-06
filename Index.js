// require
const express = require('express')
const db = require('./models')
const app = express()
require('dotenv').config()
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)
const models = require('./models/Index.js')
const PORT = process.env.PORT
const cors = require('cors')
app.use(cors())
db.connect()

// middleware
app.use(express.urlencoded({extended:false}))


//GET route "/" for home maybe?
app.get('/',(req, res)=> {
    res.send("testing Home")
})


// GET route /blog route -- lists all blog post
app.get('/blog',(req, res) => {
    db.Blog.find({})
    .then((result) => {
        res.json(result)
    })
    .catch(err => {
        console.log(err)
    })
})

// POST route /blog route -- adds new blog post
app.post('/blog',(req, res) => {
    db.Blog.create({
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    })
    .then(() => {
        res.redirect('/blog')
    })
    .catch(err => {
        console.log(err)
    })
})


// GET route /blog/:id -- shows one blog post
app.get('/blog/:id',(req, res) => {
    db.Blog.findById(req.params.id)
    .then((result) => {
        res.json(result)
        res.redirect(`/blog/${req.params.id}`)
    })
    .catch(err => {
        console.log(err)
    })
})

// PUT route /blog/:id -- updates one blog post
app.put('/blog/:id',(req, res) => {
    db.Blog.findById(req.params.id)
    .then((foundPost) => {
        foundPost.name = req.body.name
        foundPost.title = req.body.title
        foundPost.content = req.body.content
        foundPost.save()
        .then(() => {
            res.redirect(`/blog/${req.params.id}`)
        })
    })
    .catch(err => {
        console.log(err)
    })
})

// DELETE route /blog/:id -- deletes one blog post
app.delete('/blog/:id',(req, res) => {
    db.Blog.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/blog')
    })
    .catch(err => {
        console.log(err)
    })
})

app.listen(PORT, () =>{
    rowdyResults.print()
    console.log(`listening to the smoooth sounds of ${PORT}!`)
    })

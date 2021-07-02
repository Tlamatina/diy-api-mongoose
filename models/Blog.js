// Require the modules needed
let mongoose = require('mongoose')

// Create a Schema instance for Blog
let blogSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: Number,
    required: true
  },
  
  content: {
    type: String,
    required: true
  },
  
})

module.exports = mongoose.model('Blog', blogSchema)
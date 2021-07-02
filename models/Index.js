let mongoose = require('mongoose')

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/hunters', {
     useNewUrlParser: true, 
     useUnifiedTopology: true
    });

module.exports.Blog = require('./blog')
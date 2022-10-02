const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_db',{useNewUrlParser: true}, function(error){
    console.log("--> Connected to database");
})

module.exports = mongoose;

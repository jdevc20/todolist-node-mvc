const express = require('express')
const app = express() 

app.use(express.urlencoded({ extended: false }));
//Importing mongoose pre setup module
const mongoose = require('./config/db')
//Setting view engine as ejs
app.set('view engine', 'ejs')
//redefine express's default settings.
app.set('views', './app/views')

/**
 * Define Routes
 */
const index = require('./app/routes/indexRoute')
app.use('/', index );



app.listen(3000, function(){
    console.log("--> Connected on port 3000. Try http://localhost:3000/")
});
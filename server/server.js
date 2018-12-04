require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const app = new express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use( require('./routes/user'));

mongoose.connect('mongodb://localhost:27017/cafe', ( err, res) => {
    if(err) throw err;
    console.log('Database Online');
});


app.listen(process.env.PORT, () => {
    console.log('Listening port ', 3000);
});
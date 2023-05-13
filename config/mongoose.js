const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/employee_db');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error while connecting to database"));

db.once('open',()=>{
    console.log('Connected to Database');
})

module.exports = db;
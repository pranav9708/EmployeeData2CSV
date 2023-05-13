const mongoose = require('mongoose');
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('employee',employeeSchema);
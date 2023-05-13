const Employee=require('../models/employee');

module.exports.addEmployee=async(req,res)=>{
    try{
        await Employee.create(req.body);
        console.log('Employee added successfully');
        res.redirect('back');    
    }catch(err){
        console.log("Error while adding Employee",err);
        res.redirect('back');
    }
}
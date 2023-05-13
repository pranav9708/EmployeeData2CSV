const Employee=require('../models/employee');
const {Parser}=require('json2csv');

module.exports.getCsv=async(req,res)=>{
    const employees= await Employee.find();
    const parser=new Parser();
    const csv = employees.length > 0 ? parser.parse(employees) : '';

    res.attachment('employeeDetails.csv');
    res.set('Content-Type', 'text/csv');

    res.send(csv);
}
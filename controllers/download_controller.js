const Employee=require('../models/employee');
const {Parser}=require('json2csv');

module.exports.getCsv=async(req,res)=>{
    const employees= await Employee.find();

    const fields = ['_id', 'name', 'age', 'salary', 'role'];

    const parser=new Parser({fields});
    const csv = employees.length > 0 ? parser.parse(employees) : '';

    res.attachment(`employeeDetails-${Date.now()}.csv`);
    res.set('Content-Type', 'text/csv');

    res.send(csv);
}
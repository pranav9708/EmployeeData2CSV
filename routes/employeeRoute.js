const express=require('express');
const router=express.Router();
const employeeController=require('../controllers/employee_controller');

router.post('/add',employeeController.addEmployee);

module.exports = router;
const express=require('express');
const router=express.Router();

router.use('/download',require('./downloadRoute'));
router.use('/employee',require('./employeeRoute'));
router.get('/',(req,res)=>{
    return res.render('home');
})
module.exports = router;
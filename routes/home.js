const express=require('express');
const router=express.Router();


const homecontroller=require('../controllers/home_controller');

router.get('/',homecontroller.home);
router.post('/add-todo',homecontroller.addtodo);

router.get('/contact-delete/',homecontroller.tododelete)

module.exports=router;
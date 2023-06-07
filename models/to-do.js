const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    work:{
        type:String, 
        required:true,
       
    },
    category:{
        type:String, 
        // required:true 
    },
    date:{
        type:String, 
        // required:true
    }
},
{
    timestamp:true
})

const todo=mongoose.model('todo',todoSchema);

module.exports=todo;
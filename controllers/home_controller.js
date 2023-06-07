const todo=require('../models/to-do');

module.exports.home=function(req,res){
    todo.find({},function(err,todo){
        if(err){
            return;
        }
        // return res.render(('home',{contact:Contacts}));
        return res.render('home',{
            todo:todo
        })
       })

}

module.exports.addtodo=function(req,res){
  
    // todo.create(req.body,function(err,user){
    //     if(err){console.log("error in finding user in sigining up");return}
    // return res.redirect('back')
   
    //  });
    console.log(req.body.work);
    console.log(req.body.Category);
    console.log(req.body.date);
    todo.create({
        work:req.body.work,
        category:req.body.Category,
        date:req.body.date
    });
    res.redirect('/');
}

module.exports.tododelete=function(req,res){
    //geting the id from url param
    let id=req.query.id;
    
    //deleting the id from db

    todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error while deleting item from mangodb");
        }
        return res.redirect('back');
    });   
}
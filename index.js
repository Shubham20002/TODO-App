const express=require('express');
const port=8000;
const app=express();
//require connection with db
const db=require('./config/mongoose');

//use for data parsing from form to app
app.use(express.urlencoded({ extended: false }));
app.use('/',require('./routes/home'));
//setup for static files
app.use(express.static('./asset'));

//setup fro ejs
app.set('view engine','ejs');
app.set('views','./views');


//starting express server
app.listen(port,function(err){
    if(err){
        console.log("error while server starting");
    }
    console.log("server started on port:"+port);
})
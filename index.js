const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');

app.use(express.urlencoded({ extended: false }));
app.use('/',require('./routes/home'));
app.use(express.static('./asset'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log("error while server starting");
    }
    console.log("server started on port:"+port);
})
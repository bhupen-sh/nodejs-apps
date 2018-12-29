var express=require('express');
var bodyparser=require('body-parser');

var {sequelize}=require('./db/sequelize.js');
var {User}=require('./models/user.js');

var app=express();
app.use(bodyparser.json());

//setting up rout
app.post('/users',(req,res)=>{
sequelize.sync()
  .then(() => User.create({
    usr_name:req.body.name
  }));
  
  User.findAll().then((users)=>{
  res.send(users);
  },(err)=>{
  	res.status(400).send(err);
  });
});

app.listen(3000,()=>{
   console.log("running on port 3000")
});

module.exports={
	app
}
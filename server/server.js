var express=require('express');
var bodyparser=require('body-parser');
//var {sequelize}=require('./db/sequelize.js');
//var {Student}=require('./models/students.js');
var mysql=require('mysql');

const config={
  host:"localhost",
  user:"root",
  password:"",
  database:"nbr_collection"
}

var con=mysql.createConnection(config);

con.connect((err)=>{
  if(err) throw err;
});

var app=express();
app.use(bodyparser.json());

//setting up rout
app.post('/mobile_nbrs',(req,res)=>{
     sql="INSERT INTO mobile_nbrs(name,nbr) VALUES ?";
     var name=req.body.name;
     var nbr=req.body.nbr;
     console.log(name);
     var values=[
     [name,nbr]
     ];
     con.query(sql,[values],(err,result)=>{
      if(err) throw err;
      console.log("Inserted"+name)
     });

  
/*sequelize.sync()
  .then(() => Student.create({
    usr_name:req.body.name,
    usr_addr:req.body.addr
  }));*/
   
 /* student.findAll().then((users)=>{
  res.send(users);
  },(err)=>{
  	res.status(400).send(err);
  });*/

});
app.listen(3000,()=>{
   console.log("running on port 3000")
});

module.exports={
	app
}


var express=require('express');
var Sequelize=require('sequelize');
const bodyparser=require('body-parser');

var app=express();
app.use(bodyparser.json());
const sequelize=new Sequelize({
	database:'EmployeeDB',
	host:'localhost',
	username:'root',
	password:'',
	dialect: 'mysql'
});

sequelize.authenticate().then((err)=>{
	if(err) throw err;
});


const Student=sequelize.define('students',{
	std_name:{
	    type:Sequelize.STRING
	},
	std_addr:{
		type:Sequelize.STRING
	}
});


//
app.post('/students',(req,res)=>{
	sequelize.sync().then(()=>Student.create(
	{
		std_name:req.body.name,
		std_addr:req.body.addr
	
    }
));

	Student.findAll().then((students)=>
	{
		res.send(students);
	},(err)=>{
		res.send(err);
	});

});

app.listen(3000,()=>{
  console.log('running on port 300');
});




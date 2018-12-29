var Sequelize=require('sequelize');
const sequelize=new Sequelize({
	database:'EmployeeDB',
	host:'localhost',
	username:'root',
	password:'',
	dialect: 'mysql'
});



//testing the connection
 sequelize.authenticate()
 .then((err)=>{
 	if(err) throw err;
 });

 module.exports={
 	sequelize
 }

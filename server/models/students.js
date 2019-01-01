var Sequelize=require('sequelize');
var {sequelize}=require('./../db/sequelize.js');

//definition 
const def={
  std_name:{
  	type:Sequelize.STRING
  },
  std_addr:{
  	type:Sequelize.STRING
  }
}

//defining
const Student= sequelize.define('student',def);
module.exports={Student}


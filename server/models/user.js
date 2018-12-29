var Sequelize=require('sequelize');
var {sequelize}=require('./../db/sequelize.js');

const User= sequelize.define('users', {
  usr_name:{
  	type:Sequelize.STRING
  }
});

module.exports={User}


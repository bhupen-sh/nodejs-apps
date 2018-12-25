const mysql=require('mysql');
const argv=require('yargs').argv;
var command=argv._[0];
const nbrAccess=require('./nbr-access.js');

const config={
	host:"localhost",
	user:"root",
	password:"",
	database:"nbr_collection"
}

//configuring connection
var con=mysql.createConnection(config);

//connection with mysql 
con.connect((err)=> {
  if (err) throw err;



//-------inserting request-------
 if(command==='insert'){
 	nbrAccess.insertData(con,argv.name,argv.nbr);
 }

//------deleting request------------
 if(command==='delete'){
 	nbrAccess.deleteData(con,argv.name);
 }

 if(command==='find'){
 	nbrAccess.findData(con,argv.name);
 }

});
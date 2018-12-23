

//-----------inserting data into database-------
var insertData=(con,name,nbr)=>{
sql="INSERT INTO mobile_nbrs (name,nbr) VALUES ?";
var values=[name,nbr,];
con.query(sql,values,(err,result)=>{
	if (err) throw err;
	console.log("inserted "+ name);
});

}


//----------deleting data from database--------....
var deleteData=(con,name)=>{
	sql="DELETE FROM mobile_nbrs WHERE name = ?";
	var name=name; 
     con.query(sql,name,(err,result)=>{
       if(err)throw err;
       console.log("Deleted: "+ name);
     });
}


//------finding data from database.............
var findData=(con,name)=>{
  sql="SELECT nbr FROM mobile_nbrs where name= ?";
   var name=name;
  con.query(sql,name,(err,result,fields)=>{
  	if(err) throw err;
  	console.log(result);
  });
}

//----------exporting module--------..
module.exports={
   insertData,
   deleteData,
   findData
   
}
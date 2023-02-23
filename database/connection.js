const mongoose = require('mongoose');
const connection = mongoose.connection;

//database connection 
const uri = "mongodb://localhost:27017/mydb"

mongoose.connect(uri ,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(()=>{
    console.log("connection successfull!!");
}).catch((e)=>{
    console.log(e.message ,"error in connecting ");
});
connection.once("open" ,()=>{
    console.log("connected to database succesfully"); 
});
 
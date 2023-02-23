const express = require('express');
const app = express();
const cors  = require('cors');
// const cookieParser  = require('cookie-parser');

require('./database/connection');
const Widget = require('./database/WidgetModel');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/' ,(req ,res)=>{

    res.json({
        "message":"api"
    })
})

app.post("/api/create" ,async(req ,res)=>{

    const {text ,button} = req.body;
    console.log(req.body);

    try {
            if(text){

                await Widget.create({...text});
                
            }

            if(button){
                await Widget.create({...button});
                
            }
        
    } catch (error) {
        
    }
})

app.get('/api/all' ,async(req,res)=>{

    try {
        const data = await Widget.find({});
        res.json(data);
    } catch (error) {
        res.status(404).send("error in getting data");
    }
    
})
const port =  4000;

const server = app.listen(port ,()=>{
    console.log(`listning at port ${port}`);
}) 


 



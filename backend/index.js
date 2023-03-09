const express = require('express');
const { connection } = require("./db");
const {todoRouter} = require('./routes/todo.routes');
require('dotenv').config();
const app = express();
const PORT = Number(process.env.PORT) || 5000;
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



app.use(express.json());

app.use("/todos", todoRouter);

app.listen(PORT, async() => {
    try{
        await connection;
        console.log("server is running on port " + process.env.PORT);
        console.log("connected to db");
    }catch(error){
        console.log(error);
    }

});
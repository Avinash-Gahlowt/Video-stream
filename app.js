const express = require ('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT||5500
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, '/simple_server.py'));
});
app.listen(PORT,()=>{
    console.log(`${PORT}`);
});

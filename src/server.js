const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send({msg:"home Path.."})
})


app.get('/task',(req,res)=>{
    setTimeout(()=>{
        return res.json({success:true,message:"Task router"})
    },11000)
})
app.listen(9090,()=>{
    console.log("start...")
})
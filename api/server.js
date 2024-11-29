const express = require('express')
const Database = require('./configs/db')
const quizeRouter = require('./routers/quize.router')
const app = express()

app.use(express.json())
app.use('/quize',quizeRouter)

app.get('/',(req,res)=>{
    res.send({msg:"home Path.."})
})
app.get('/test',(req,res)=>{
    setTimeout(()=>{
        return res.json({success:true,message:"Test router"})
    },11000)
})
app.listen(9090,()=>{
    console.log("start...")
    Database()
})
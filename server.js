const express=require('express')
const app=express()
const PORT=3000
const sequelize=require('./database/database')
const user=require('./router/userrouter')
const post=require('./router/postrouter')
const connection= async()=>{
    try{
    const connect= await sequelize.authenticate()
    console.log('connected sucessfully')
    }catch(e){
        console.log(e.message)
    }
}
connection()
app.use(express.json())
app.use(user)
app.use(post)


app.listen(PORT,()=>{
    console.log(`server is running On port ${PORT}`)
})
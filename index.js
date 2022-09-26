require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const bodyparser=require('body-parser')
//app.use(cors)
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const PORT=process.env.PORT

//route
const airport=require('./api/airport/airpot')
const flight=require('./api/flight/flight')

app.use('/airport',airport)
app.use('/flight',flight)
app.get('*',(req,res)=>{
    return res.status(404).json({status:false,message:'Page Not Found'})
})


app.listen(PORT,()=>{
    console.log(`Application demarre sur le port ${PORT}`)
})
// const express =require('express')
const testRouter =require('./test.route')

const webApi =(app)=>{
 
   app.use('/api/v1',testRouter)
}
module.exports=webApi
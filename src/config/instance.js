require('dotenv').config()
const mongoose =require('mongoose')
///mongo env
const MONGO_USERNAME=process.env.MONGO_USERNAME
const MONGO_PASSWORD=process.env.MONGO_PASSWORD
const url=`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ulsyblz.mongodb.net/`

///create connection

const instance = ()=>{
    console.log(MONGO_USERNAME, MONGO_PASSWORD)
    mongoose.connect(url).then(()=>console.log('Connect mongoDb successfully!')).catch((error)=>console.log('fail to connect db:',error))

}
module.exports=instance

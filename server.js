require('dotenv').config()
const app =require('./src/app')

const Port =process.env.PORT

app.listen(Port,()=>{
    console.log('Server listen on PORT:',Port)
})





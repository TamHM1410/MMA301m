const express = require('express')
const helmet =require('helmet')
const morgan = require('morgan')
const compression =require('compression')
const cookieParser = require('cookie-parser')
const webApi =require('./routers/index')
const bodyParser = require('body-parser')


const app = express()
////app config
app.use(helmet())
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(bodyParser.json())
app.use(compression())
app.use(express.urlencoded({ extended: true}));


///app route
webApi(app)





module.exports=app
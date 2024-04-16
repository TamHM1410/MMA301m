const express=require('express')
const orderRouter=express.Router()
const orderController=require('../controller/order.controller')
orderRouter.post('/orders',orderController.createOrder)


module.exports=orderRouter
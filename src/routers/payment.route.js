const express=require('express')
const paymentController=require('../controller/payment.controller')
const paymentRouter=express.Router()

paymentRouter.post('/orders/:id/payment',paymentController.createPayment)
paymentRouter.get('/orders/:id/payment',paymentController.getPayment)



module.exports=paymentRouter
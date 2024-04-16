const express=require('express')
const discountRouter=express.Router()
const discountController=require('../controller/qr_discount.controller')

discountRouter.post('/qr/:id/discounts',discountController.createDiscount)
discountRouter.get('/qr/:id/discounts',discountController.getDiscount)

module.exports=discountRouter
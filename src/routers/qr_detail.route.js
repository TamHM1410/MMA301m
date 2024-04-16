const express=require('express')
const qr_detailRouter= express.Router()
const qrdetailController=require('../controller/qr_detail.controller')
qr_detailRouter.post('/qr/:id/details',qrdetailController.createDetail)
qr_detailRouter.get('/qr/:id/details',qrdetailController.getDetail)


module.exports=qr_detailRouter
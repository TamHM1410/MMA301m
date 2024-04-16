const express =require('express')
const qrController=require('../controller/qr_code.controller')
const qr_codeRouter=express.Router()
qr_codeRouter.get('/qr/:id/code',qrController.getQrCode)
qr_codeRouter.post('/qr/:id/code',qrController.createQrCode)

module.exports=qr_codeRouter
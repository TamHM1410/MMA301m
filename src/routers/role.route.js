const express =require('express')
const roleController=require('../controller/role.controller')
const roleRouter =express.Router()

roleRouter.post('/role',roleController.createRole)

module.exports=roleRouter
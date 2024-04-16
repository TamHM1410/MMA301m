const qr_discount=require('../models/qr_discount.model')
const instance=require('../config/instance')
const mongoose=require('mongoose')
class QrDiscountService{
    static createQr_discount=async(data,id)=>{
        try{
            instance()
            let newData=await qr_discount.create({
                discount:data.discount,
                qr_id:new mongoose.Types.ObjectId(id),
                min_price:data.min_price

            })
            return {
                status:'success',
                statusCode:201,
                data:newData
            }

        }catch(error){
            console.log(error)
            return {
                status:'Internal server',
                statusCode:500
            }
        }
    }
    static getDiscount=async(id)=>{
        try{
            instance()
            let data=await qr_discount.find({
                qr_id:new mongoose.Types.ObjectId(id),

            })
            return data ?{
                status:'success',
                statusCode:201,
                data:data

            }:{
                status:'Not found',
                statusCode:404,

            }

        }catch(error){
            console.log(error)
            return {
                status:'Internal server',
                statusCode:500
            }

        }
    }

}
module.exports=QrDiscountService
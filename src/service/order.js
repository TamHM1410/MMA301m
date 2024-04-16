const mongoose=require('mongoose')
const order=require('../models/order.model')
const qr =require('../models/qr.model')
const instance=require('../config/instance')

class order_service{
    static updateOrder =async(data)=>{
        try{
            

        }catch(error){
            return {
                status:'Error',
                statusCode:500
            }

        }
    }
    static createOrder=async(data)=>{
        try{
            instance()
            const ordera=await order.find()
            console.log(ordera,'check')
            const checkQr_id=await qr.findById({
                _id:new mongoose.Types.ObjectId(data.qr_id)


            })
            console.log(checkQr_id)
            if(checkQr_id) return {
                status:'Qr existing!',
                statusCode:409
            }
           
            const newOrder=await order.create({
                qr_id:new mongoose.Types.ObjectId(data.qr_id),
                user_id:new mongoose.Types.ObjectId(data.user_id),
                total_price:data.total_price,
                amount:data.amount,
                discount:data.discount
         
                
            })
            return {
                status:'Success',
                statusCode:201,
                data:newOrder
            }


        }catch(error){
            console.log(error)
            return {
                status:'Error',
                statusCode:500
            }
        }
    }
    

}
module.exports=order_service
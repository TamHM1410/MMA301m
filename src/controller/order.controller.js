const orderService=require('../service/order')
class orderController{
    static createOrder=async(req,res)=>{
        try{
         

            let data=req.body
            console.log(data)
            if(Object.keys(req.body).length===0||!req.body.qr_id||!req.body.amount||!req.body.discount||!req.body.user_id||!req.body.total_price){
                return res.status(400).json({
                    status:"bad request",
                    statusCode:400
                })
            }
            let result=await orderService.createOrder(data)
            return res.status(result.statusCode).json(result)

        }catch(error){
            return {
                status:'Internal server',
                statusCode:500
            }
        }
    }


}
module.exports=orderController
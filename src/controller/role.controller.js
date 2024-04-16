const roleService=require('../service/role.service')
class RoleController{
    static createRole=async (req,res)=>{
        try{ 
            if (!req.body.name) {
                return res.status(400).json({
                    status: 'Bad request',
                    statusCode: 400
                });
            }
            const result =await roleService.createRole(req.body)
            return res.status(result.statusCode).json(result)



        }catch(error){
            
            return res.status(500).json({
                status:'Internal server',
                statusCode:500,
                EM:error
            })

        }

    }

}
module.exports=RoleController
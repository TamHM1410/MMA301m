const role=require('../models/role.model')
const instance=require('../config/instance')
class RoleService {
    static createRole=async (data)=>{
         
        try{
            instance()
            
            const newRole =await role.create({
                name:data.name
            })
            return   {
                status:'Success',
                statusCode:201,
                data:newRole
            }


        }catch(error){
            return {
                status:'Error',
                statusCode:500,
                EM:error
            }
        }
    }


}

module.exports=RoleService
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var roleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
     
    },
    status:{
        type:String,
        default:false,
        required:true,
       
    }
});

//Export the model
module.exports = mongoose.model('Role', roleSchema);
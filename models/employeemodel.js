var mongoose=require('mongoose')
var employeeSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        salary:{
            type:Number
        },
        designation:{
            type:String
        },
        address:{
            type:String
        }

    }
)
var employeemodel=mongoose.model('employees',employeeSchema)
module.exports={employeemodel}
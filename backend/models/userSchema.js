const mongoose=require ('mongoose')

const userSchema=mongoose.Schema({
    email:[{type:String,unique:true}],
    password:String,
    isAdmin:{
        type:Boolean,
        default:false

    },

},{timestamp: true})
const User=mongoose.model('users',userSchema)
module.exports=User

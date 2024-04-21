const mongoose=require('mongoose')


const restaurantSchema=mongoose.Schema({
    name:String,
    city:String,
    governrate:String,
    image:String,
    num:String
})
const restaurant=mongoose.model('restaurants',restaurantSchema)
module.exports=restaurant
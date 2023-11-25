const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone: String,
    address: String,

})
const usermodel=mongoose.model('user',userschema)
module.exports=usermodel
const mongoose = require('mongoose')
const {Schema}= mongoose
const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    password:{
        type:String,
        required:true,
       
    },
    otp:{
        type:String,
       
        default:""
    }

})
module.exports = mongoose.model('loginUser',userSchema)
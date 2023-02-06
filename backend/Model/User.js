const mongoose =require("mongoose")


const UserSchema= new mongoose.Schema({
    mailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Users",UserSchema)

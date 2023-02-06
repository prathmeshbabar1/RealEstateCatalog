const mongoose =require("mongoose")


const PropertyDetails= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    length:{
        type:String,
        required:true
    },
    breath:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model("PropertyDetails",PropertyDetails)
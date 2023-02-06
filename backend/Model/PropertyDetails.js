const mongoose =require("mongoose")


const PropertyDetails= new mongoose.Schema({
    property:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model("PropertyDetails",PropertyDetails)
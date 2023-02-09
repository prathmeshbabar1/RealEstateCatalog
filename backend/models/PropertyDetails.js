const mongoose =require("mongoose")

const PropertySchema= new mongoose.Schema({
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
    },
    views:{
        type:String,
        required:true
    },
    daysleft:{
        type:String,
        required:true
    }

})
const propertyModel=mongoose.model("PropertyDetails",PropertySchema)
module.exports=propertyModel


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
    },
    daysleft:{
        type:String,
    },
    status:{
        type:String,
    }

})
const propertyModel=mongoose.model("propertydetails",PropertySchema)

module.exports=propertyModel

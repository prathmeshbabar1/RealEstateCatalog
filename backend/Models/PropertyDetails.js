const mongoose = require('mongoose'); //imported Mongoose

    const propertySchema = new mongoose.Schema({
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

    const propertyModel = mongoose.model('propertyDetails',propertySchema);

    module.exports=propertyModel;

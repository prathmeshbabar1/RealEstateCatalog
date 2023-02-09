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

    
    },{timestamps:true})

    const propertymodel = mongoose.model('propertydetails',propertySchema)

    module.exports=propertymodel;

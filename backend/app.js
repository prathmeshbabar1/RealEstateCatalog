const mongoose = require('mongoose'); //imported Mongoose

const url = 'mongodb+srv://prathmesh:prathmesh@cluster0.jdolkoc.mongodb.net/realestate?retryWrites=true&w=majority'

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>{if(err){ console.log(err);}
    else{console.log("connected to database");}}) //connected to Mongodb

    const propertyDetailsSchema = mongoose.Schema({
        typeOfProperty:{type:String,required:true},
        contact:{type:String,required:true},
        area:{type:String,required:true},
    })

    const propertyDetails = mongoose.model("propertydetails",propertyDetailsSchema)

    const newPropertyDetails=new propertyDetails({
        typeOfProperty:"plot",
        contact:"8975865463",
        area:"1000"
    })

    newPropertyDetails.save((err)=>{
       if(err){ console.log(err);
       }else{
            console.log("Property Detail Saved Successfully")
        }
    })
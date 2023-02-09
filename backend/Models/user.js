const mongoose = require('mongoose'); //imported Mongoose

    const userSchema = mongoose.Schema({
        email:{type:String,required:true},
        password:{type:String,required:true}
    },{timestamps:true})

    const usermodel = mongoose.model('user',userSchema);

    module.exports=usermodel;

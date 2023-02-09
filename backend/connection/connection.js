const mongoose = require('mongoose'); //imported Mongoose
async function connection(){
const url = 'mongodb+srv://prathmesh:prathmesh@cluster0.jdolkoc.mongodb.net/userdb?retryWrites=true&w=majority'

await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>{if(err){ console.log(err);}
    else{console.log("connected to database");}}) //connected to Mongodb
}

module.exports=connection;

const express = require('express');
const mongoose = require("mongoose");
const app=express();
const port = '8080'
const cors = require("cors")
const bodyParser = require('body-parser');

const property=require("./routes/ExitstingProperty")
const search=require("./routes/Search")
const soldStatus=require("./routes/updateSoldStatus")

const loginRoutes = require('./routes/login')
const userRoute=require("./routes/PostProperty")
const registerRoutes = require('./routes/register');


//connected to db
// const uri='mongodb://localhost/RealEstate'
const uri='mongodb+srv://prathmesh:prathmesh@cluster0.jdolkoc.mongodb.net/realestate?retryWrites=true&w=majority'
//const uri="mongodb+srv://prathmesh:prathmesh@cluster0.jdolkoc.mongodb.net/userdb?retryWrites=true&w=majority'"
const conn=async()=>{
  await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.log(err.message)
        }
        else {
            console.log("Connected to mongoDB successfully")
        }
    }
    )
}
conn()


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//ppty and search routing
app.use("/properties",property)
app.use("/search",search )
app.use("/properties",soldStatus)


app.use("/api",userRoute)

//login and register routing
app.use(loginRoutes)
app.use( registerRoutes)
app.use('/*', (req, res) => {
  res.send('Page not Found')
})

//server listening
app.listen(port, () => { console.log(`app is running at ${port}`); })



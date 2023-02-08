const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const property=require("./Routes/ExitstingProperty")
const search=require("./Routes/Search")
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register');

//connected to db
const uri="mongodb+srv://prathmesh:prathmesh@cluster0.jdolkoc.mongodb.net/userdb?retryWrites=true&w=majority'"
mongoose.connect(uri, (err) => {
    if (err) {
        console.log("Connection to mongodb failed")
    }
    else {
        console.log("Connected to mongoDB successfully")
    }
}
)

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ppty and search routing
app.use("/properties",property)
app.use("/search",search )

//login and register routing
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/*', (req, res) => {
  res.send('Page not Found')
})

//server listening
app.listen(8080, (() => console.log('Server is running on PORT 8000')))



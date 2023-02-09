
const express = require('express');
const mongoose = require("mongoose");
const app=express();
const port = '8080'
// const cors = require("cors")
const bodyParser = require('body-parser');
// const property=require("./Routes/ExitstingProperty")
// const search=require("./Routes/Search")
// const loginRoutes = require('./routes/login')
// const registerRoutes = require('./routes/register');
const userRoutes = require("./routes/user");

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
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//user routing
app.use("/api",userRoutes);

//ppty and search routing
// app.use("/properties",property)
// app.use("/search",search )

// //login and register routing
// app.use('/login', loginRoutes)
// app.use('/register', registerRoutes)
app.use('/*', (req, res) => {
  res.send('Page not Found')
})

//server listening
app.listen(port, () => { console.log(`app is running at ${port}`); })



// const mongoose=require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const property=require("./Routes/ExitstingProperty")
const search=require("./Routes/Search")

//mongoDb connection
const mongoose = require("mongoose")
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
app.use(cors())
app.use(express.json())

//exitisting properties showing

app.use("/properties",property)

//Search properties in search bar
app.use("/search",search )

app.listen(3000)


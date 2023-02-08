require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose")
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register');
const app = express();
const db_url=process.env.url
mongoose.connect(db_url,()=>{
  console.log("succesfully connected to db")
})
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use('/login', loginRoutes)

app.use('/register', registerRoutes)

app.use('/*', (req, res) => {
  res.send('Page not Found')
})


app.listen(process.env.PORT, (() => console.log('Server is running on PORT', process.env.PORT)))



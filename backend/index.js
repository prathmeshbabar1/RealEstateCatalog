const express = require("express");
const mongoose = require("mongoose");

const connection = require("./connection/connection")
const registerRoutes = require("./routes/registration");
const userRoutes = require("./routes/user");
connection();
const bodyParser = require('body-parser');
const port = '8080'
const app = express();
// app.use(express.json());
app.use("/api",registerRoutes);
app.use("/api",userRoutes);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port, () => { console.log(`app is running at ${port}`); })
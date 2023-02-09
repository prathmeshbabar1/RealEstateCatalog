const express = require("express");

const registerRoutes = express.Router();

registerRoutes.get("/register",(req,res)=>{
    res.send("ok");
})
module.exports = registerRoutes;
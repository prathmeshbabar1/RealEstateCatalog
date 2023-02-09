const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const User= require('../models/user')
const PropertyDetails = require('../models/PropertyDetails');
const { body, validationResult } = require('express-validator');
const userRoutes = express.Router();
userRoutes.use(bodyParser.urlencoded({ extended: false }))
userRoutes.use(bodyParser.json())

userRoutes.get('/users', async(req, res) => {
    // let {email,password} = req.body;
    try{
        const users = await User.find()
        res.status(200).json({
            users
        })
           }catch(e){
            console.log(e);
            res.status(500).json({
                status:"error while fetching users",
                massage:e.massage
            })
           }
})
// when veriable is part of url then it is req parameter
// logical nesting want to show specific data
userRoutes.get('/users/:id', async(req, res) => {
    // let {email,password} = req.body;
    try{
        const user = await User.find({_id:req.params.id});
        res.status(200).json({
            user
        })
           }catch(e){
            console.log(e);
            res.status(500).json({
                status:"error while fetching users",
                massage:e.massage
            })
           }
})
// userRoutes.post("port",validator(middleware),(req,res)=>{})
userRoutes.post('/registration', body('email').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 5 }), async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   console.log(req.body);
//    cheking for email is duplicate
// bcrypt password
  const  {email,password}=req.body
   try{
const user = await User.create({email:email,password:password});
res.status(200).json({
    status:" created new users",
    user
})
   }catch(e){
    console.log(e);
    res.status(500).json({
        status:"error while creating data",
        massage:e.massage
    })
   }
})
// views  dayLeft
userRoutes.post("/property",async(req,res)=>{
    console.log(req.body);
    const {property,contact,area,views,daysleft}=req.body;
    try{
        const propertyDetails = await PropertyDetails.create({property:property,contact:contact,area:area,views:views,daysleft:daysleft});
        res.status(200).json({status:"successfully created propertyDetails",
    propertyDetails
})
    }
catch(e){
    console.log(e);
    res.status(500).json({
        status:"error while creating propertyDetails",
        massage:e.massage
    })
   }})
    
   userRoutes.get('/user', async(req, res) => {
const data = await PropertyDetails.find({property:"pleeot"})
console.log(data);
res.send(data)
})
userRoutes.get("/search/:key", async (req, resp) => {
    let result = await PropertyDetails.find(
        {
            "$or": [
                {contact: {$regex:req.params.key } },
                {property: {$regex:req.params.key } },
                {area: {$regex:req.params.key } }
            ]
        }
    )
    resp.send(result)
    console.log(req.params.key)
})

module.exports = userRoutes;
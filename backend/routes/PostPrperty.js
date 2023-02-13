const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')//imported because have to upload files

// const User= require('../models/user')
const PropertyDetails = require('../models/PropertyDetails');
const { body, validationResult } = require('express-validator');
const userRoutes = express.Router();
userRoutes.use(bodyParser.urlencoded({ extended: false }))
userRoutes.use(bodyParser.json())

userRoutes.use(express.json());
userRoutes.use(fileUpload());
// views  dayLeft
userRoutes.post("/property", async (req, res) => {
    console.log(req.body);
    const { property, contact, area, views, daysleft } = req.body;
    // console.log(property);
    try {
        const propertyDetails = await PropertyDetails.create({ property: property, contact: contact, area: area, views: views, daysleft: daysleft });
        res.status(200).json({
            status: "successfully created propertyDetails",
            propertyDetails
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            status: "error while creating propertyDetails",
            massage: e.massage
        })
    }
})

module.exports=userRoutes;

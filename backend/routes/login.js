const express = require('express')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require("../models/User");
const jwt = require("jsonwebtoken")

const secret = "realEstate"

router.use(express.json())
router.use(express.urlencoded())

router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        const findQueryinDB = await User.findOne({ email: email });
        console.log(req.body)

        if (!findQueryinDB) {
            return res.status(404).json({
                status: "Error",
                message: "User isn't register,please register before signin"
            });

        } else {
            //  for passwordvallidation
            console.log(req.body)

            //privacy
            bcrypt.compare(password, findQueryinDB.password, (err, result) => {
                //authentication process by bcrypt

                console.log(result, "from bcrypt")
                if (!result) {
                    return res.status(403).json({
                        status: "Failed",
                        message: "Invalid User Password"
                    })
                }
                else {
                    //after authentication we have to authorize the user by sending token to user
                    const token = jwt.sign({
                        // 60 hours from the current time.
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 60),
                        findQueryinDB: findQueryinDB._id
                    }, secret);

                    const userdetails = { ...findQueryinDB._doc, password: undefined }
                    return res.status(200).json({
                        status: "Success",
                        message: { token, userdetails }
                    })
                }
            })

        }

    } catch (err) {
        console.log(err)
    }
})

module.exports = router

//token is used to authenticate the user for subsequent requests 
//and provides a secure way to transmit information between the client and server.


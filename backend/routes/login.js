const router = require('express').Router()

const User = require("../models/user");

const { body, validationResult } = require('express-validator');
router.get('/', body('email').isEmail(),
    body('password').isLength({ min: 5 }), async (req, res) => {
        const { email,  password } = req.body;


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const findQueryinDB = await User.findOne({ email: email });

            if (findQueryinDB) {
                //  for passwordvallidation

            } else {
                return res.status(403).json({
                    status: "Error",
                    message: "User isn't register"
                });
            }
        } catch (error) {
            console.log(error.message)
            res.status(400).json({
                status: "invalid user",
                message: error

            })
        }
    })


module.exports = router;
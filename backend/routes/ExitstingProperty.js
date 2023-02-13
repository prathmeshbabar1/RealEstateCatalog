const router = require('express').Router()
const Properties = require("../models/PropertyDetails")


router.get('/', async (req, resp) => {
    try {
        let allproperties = await Properties.find();
        if (allproperties.length > 0) {
            resp.send(allproperties)
            console.log(allproperties)

        }
        else {
            resp.send({ message: "no product found" })
        }
    }
    catch {
        resp.status(400).json({ message: "somthing went wrong" })
    }
})

module.exports = router;
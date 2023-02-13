const router = require('express').Router()
const Properties = require("../models/PropertyDetails")


router.put("/:id", async (req, resp) => {
    try{

        let result = await Properties.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            }
        )
        resp.send(result)
    }
    catch{
        resp.status(400).json({ message: "error in upadating" })
    }
})

module.exports = router;
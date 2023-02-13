const router = require('express').Router()
const Properties = require("../models/PropertyDetails")


router.get('/:key', async (req, resp) => {
    let result = await Properties.find(
        {
            "$or": [
                {contact: {$regex:req.params.key } },
                {property: {$regex:req.params.key } },
                {area: {$regex:req.params.key } }
            ]
        }
    )
    resp.send(result)
    console.log(result)
    console.log(req.params.key)
})


module.exports = router;
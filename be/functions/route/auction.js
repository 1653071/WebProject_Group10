const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/add", (req, res) => {
    (async () => {
        try {
            const document = await db.collection("auction").add({
                name : req.body.name,
                price : req.body.price,
                productId : req.body.productId,
                sellerId : req.body.sellerId,
                userId : req.body.userId,
                datecreate: req.body.datecreate
            });
            return res.status(200).send("Add successful");
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;
const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db");

//Create
router.post("/add", (req, res) => {
    (async () => {
        try {
            const document = await db.collection("product_category").add({
                name: req.body.name,
            });
            return res.status(200).send("Add successful");
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

//update
router.put("/update/:id", (req, res) => {
    (async () => {
        try {
            const document = db.collection("product_category").doc(req.params.id);
            await document.update({
                name: req.body.name,
            });
            return res.status(200).send();
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

//delete
// router.delete("/delete/:id", (req, res) => {
//     (async () => {
//         try {
//             const document = db.collection("products").doc(req.params.id);
//             await document.delete();
//             return res.status(200).send();
//         } catch (error) {
//             return res.status(500).send(error);
//         }
//     })();
// });

module.exports = router;
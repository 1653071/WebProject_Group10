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
router.delete("/delete/:id", (req, res) => {
    (async () => {
        try {
           let query = db.collection("products").where("category_id","==",req.params.id);
           const document = db.collection("product_categories").doc(req.params.id);
           await query.get().then((querySnapshot) => {
               let docs = querySnapshot.docs;
               if (docs.length === 0){
                document.delete();
                return res.status(200).send("delete");
               }
               return res.status(200).send("Ton tai san pham trong category.");
           });
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;
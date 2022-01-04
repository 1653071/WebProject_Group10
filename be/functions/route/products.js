const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db");

//Get all San Pham
router.get("/", (req, res) => {
    (async () => {
      try {
        let query = db.collection("products");
        let response = [];
        await query.get().then((querySnapShot) => {
          let docs = querySnapShot.docs;
          for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              name: doc.data().name,
              price: doc.data().price,
              pricebuy: doc.data().pricebuy,
              datecreated: doc.data().datecreate,
              dateend: doc.data().dateend
            };
            response.push(selectedItem);
          }
          return response;
        });
        return res.status(200).send(response);
      } catch (error) {
        return res.status(500).send(error);
      }
    })();
});

//Get san phan theo ID
router.get("/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);
      let product = await document.get();
      let response = product.data();

      return res.status(200).send(response);

    } catch (error) {
      console.log(error); 
      return res.status(500).send(error);
    }
  })();
});

//Them San Pham
router.post("/add", (req, res) => {
  (async () => {
    try {
      const document = await db.collection("products").add({
        id: doc.id,
        name: req.body.name,
        price: req.body.price,
        pricebuy: req.body.pricebuy,
        datecreate: req.body.datecreate,
        dateend: req.body.dateend,
        isAccept: req.body.isAccept
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
      const document = db.collection("products").doc(req.params.id);

      await document.update({
        name: req.body.name,
        price: req.body.price,
        pricebuy: req.body.pricebuy,
        datecreate: req.body.datecreate,
        dateend: req.body.dateend,
        isAccept: req.body.isAccepts
      });

      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

//Delete
router.delete("/delete/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);
      await document.delete();
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

module.exports = router;
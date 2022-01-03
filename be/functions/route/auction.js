const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db");

//Get all San Pham
router.get("/:productID", (req, res) => {
    const productID = req.params.productID;
    (async () => {
      try {
        let query = db.collection("auction").where("productId","==",productID);
        let response = [];
        await query.get().then((querySnapShot) => {
          let docs = querySnapShot.docs;
          for (let doc of docs) {
            const selectedItem = {
              productId:doc.data().productId,
              sellerId: doc.data().sellerId,
              userId: doc.data().userId
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

module.exports = router;
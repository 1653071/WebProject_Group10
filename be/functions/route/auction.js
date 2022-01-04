const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db");


//Get auction by id product
router.get("/product/:productID", (req, res) => {
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
              userId: doc.data().userId,
              price : doc.data().price,
              datecreate : doc.data().datecreate
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

//add auction
router.post("/add", (req, res) => {
    (async () => {
        try {
          const productID = req.body.productId;
          
          const document = db.collection("products").doc(productID);
          let product = await document.get();
          let price_tmp = req.body.price;
          let price_product = product.data().pricebuy;
          let price_aution = product.data().price_auction;
          let timeEnd = Date.parse(product.data().dateend);
          let timeCur = Date.parse(req.body.datecreate);
          let tmp = timeEnd - timeCur;
          //let tmp = (price_tmp - price_aution) / jump;
          if (price_tmp > price_aution && tmp >=0 ) {
            const document = await db.collection("auction").add({
              datecreate: req.body.datecreate,
              price : req.body.price,
              productId : req.body.productId,
              sellerId : req.body.sellerId,
              userId : req.body.userId  
          });
            return res.status(200).send("Add successful");
          } else {
            return res.status(404).send("Add fail");
          }
        } catch (error) {
         
          console.log(error);
            return res.status(500).send(error);
            
        } 
    })();
});

//Get auction by id user
router.get("/user/:ID", (req, res) => {
  const UserID = req.params.ID;
  (async () => {
    try {
      let query = db.collection("auction").where("userId","==",UserID);
      let response = [];
      await query.get().then((querySnapShot) => {
        let docs = querySnapShot.docs;
        for (let doc of docs) {
          const selectedItem = {
            productId:doc.data().productId,
            sellerId: doc.data().sellerId,
            userId: doc.data().userId,
            price : doc.data().price,
            datecreate : doc.data().datecreate
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


module.exports = router;
const express = require("express");
const router = express.Router();



const db = require("../db");

router.get("/", (req, res) => {
    (async () => {
      try {
        let query = db.collection("users");
        let response = [];
        await query.get().then((querySnapShot) => {
          let docs = querySnapShot.docs;
          for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              name: doc.data().name,
              address: doc.data().address,
              picture: doc.data().picture,
              description: doc.data().description,
              phone: doc.data().phone,
              type: doc.data().type,
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
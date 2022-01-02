const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

const db = require("../db");
router.post("/login", (req, res) => {
  (async () => {
    try {
      const document = await db.collection("users").add({
        name: req.body.name,
        password: req.body.password,
        username: req.body.username,
        birthdate: req.body.datecreate 
        
      });

      return res.status(200).send("Add successful");
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});
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
router.post("/add", (req, res) => {
    (async () => {
      try {
        const document = await db.collection("users").add({
          name: req.body.name,
          password: req.body.password,
          username: req.body.username,
          birthdate: req.body.datecreate 
          
        });
  
        return res.status(200).send("Add successful");
      } catch (error) {
        return res.status(500).send(error);
      }
    })();
  });

// Get user by id
router.get("/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("users").doc(req.params.id);
      let product = await document.get();
      let response = {
        id : product.data().id,
        name: product.data().name,
        birthdate: product.data().birthdate,
        isSaler: product.data().isSaler
      } 

      return res.status(200).send(response);
      } catch (error) {
      console.log(error); 
      return res.status(500).send(error);
    }
  })();
});
  
//Update User by id
router.put("/update/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("users").doc(req.params.id);

      await document.update({
        name: req.body.name,
        birthdate: req.body.birthdate,
      });

      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});
module.exports = router;
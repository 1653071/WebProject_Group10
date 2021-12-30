const functions = require("firebase-functions");
const express = require("express");
var admin = require("firebase-admin");
var serviceAccount = require("./permission.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  
});

const app = express();
const db = admin.firestore();
const cors = require("cors");
app.use(cors({ origin: true }));
app.get("/users", (req, res) => {
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
exports.app = functions.https.onRequest(app);
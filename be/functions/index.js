const functions = require("firebase-functions");
const express = require("express");
const usersRouter = require("./route/users");
const productsRouter = require("./route/products");
const app = express();
const cors = require("cors");
app.use(cors({ origin: true }));

app.use("/users", usersRouter);
app.use("/products", productsRouter);

exports.app = functions.https.onRequest(app);
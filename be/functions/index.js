const functions = require("firebase-functions");
const express = require("express");
const morgan = require("morgan")
const usersRouter = require("./route/users");
const productsRouter = require("./route/products");
const watchListRouter = require("./route/wactchList");
const authRouter = require("./route/auth");
const auctionRouter = require("./route/auction");
const adminauthRouter = require("./route/adminauth")
const product_categoryRouter =require("./route/product_category");

const auth = require("./middleware/auth");
const app = express();

app.use(morgan('dev'));
const cors = require("cors");

app.use(cors({ origin: true }));

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/adminauth", adminauthRouter);
app.use("/auction",auctionRouter);

app.use("/auth", authRouter);
app.use("/watchlist",watchListRouter);
app.use("/auction",auctionRouter);
app.use("/product_category",product_categoryRouter);

exports.app = functions.https.onRequest(app);
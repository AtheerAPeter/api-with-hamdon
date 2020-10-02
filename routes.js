const express = require("express");
const { defaultMiddleware } = require("./middleware");

//using router from express to get the routes in a seperate file then export them to the main one (app.js)
const router = express.Router();
//
const {
  getArticles,
  singleRequest,
  singleAdd,
  editOne,
} = require("./controllers");

//route handler
router.get("/articles", getArticles);

// only one
router.get("/article/:id", singleRequest);

// add
router.post("/articles", defaultMiddleware, singleAdd);

//edit one
router.put("/articles", defaultMiddleware, editOne);

module.exports = router;

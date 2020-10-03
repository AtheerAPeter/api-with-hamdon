const express = require("express");
const { defaultMiddleware, auth } = require("./middleware");

//using router from express to get the routes in a seperate file then export them to the main one (app.js)
const router = express.Router();
//
const {
  getArticles,
  singleRequest,
  singleAdd,
  editOne,
  login,
  signin,
} = require("./controllers");

//route handler
router.get("/articles", getArticles);

// only one
router.get("/article/:id", singleRequest);

// add
router.post("/articles", auth, singleAdd);

//edit one
router.put("/articles", auth, editOne);

//login
router.post("/login", login);

//sign in
router.post("/signin", signin);

module.exports = router;

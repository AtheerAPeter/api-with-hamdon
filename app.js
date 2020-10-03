const express = require("express");
const app = express();
const { notFound } = require("./middleware");
const v1 = require("./routes");

//middleware
//a middleware by express used if we want to send and recieve json in body
app.use(express.json());

// app.use(defaultMiddleware);

//routes from route file
app.use("/v1", v1);

//the last one that returns 404 if no rout match happened
app.use(notFound);

app.listen(5000, () => {
  console.log("connect on 5000");
});

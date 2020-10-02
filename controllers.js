const validate = require("validate.js");
//the schema in a different file to add different schemas
const validator = require("./tools/validator.tools");
const { resError, resData } = require("./tools/helpers.tools");

let data = [
  {
    id: 1,
    title: "hello",
    text: "my text",
    image: "image",
  },
  {
    id: 2,
    title: "hello",
    text: "my text",
    image: "image",
  },
  {
    id: 3,
    title: "hello",
    text: "my text",
    image: "image",
  },
  {
    id: 4,
    title: "hello",
    text: "my text",
    image: "image",
  },
];

//return all data
module.exports.getArticles = getArticles = (req, res) => {
  return res.json(data);
};

//return a single on by id
module.exports.singleRequest = singleRequest = (req, res) => {
  let id = req.params.id;

  let filteredData = data.filter((item) => item.id == id);
  if (filteredData.length > 0) {
    return res.json(filteredData);
  } else {
    res.statusCode = 404;
    return res.json("404 not found");
  }
};

//add one
module.exports.singleAdd = singleAdd = (req, res) => {
  //get the request body
  let body = req.body;
  //check the request body

  //checking validation of the request body with the schema from the validator function then return if something doesnt match
  const isInvalid = validate(body, validator.addArticle());
  //we return an object with status so the front end job can be easier
  if (isInvalid) resError(res, isInvalid);

  //save
  let data = {
    id: Date.now(),
    ...body,
  };
  //send response
  return resData(res, data);
};

module.exports.editOne = (req, res) => {
  let article = {
    id: 5,
    title: "title",
    text: "text",
    image: "image",
  };
  //get body
  let body = req.body;
  //validate
  let isValidate = validate(body, validator.addArticle(false));
  if (isValidate) res.json(resError(res, isValidate));
  //edit it
  Object.keys(body).forEach((item) => (article[item] = body[item]));
  //return
  return resData(res, article);
};

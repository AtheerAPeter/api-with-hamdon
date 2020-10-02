let validator = {};

//we return a function because we can use the same schema to add and edit so we can turn off required fields when the clinet requests an edit so he can send only one
validator.addArticle = (add = true) => ({
  title: {
    presence: add,
    type: "string",
  },
  text: {
    presence: add,
    type: "string",
  },
  image: {
    presence: add,
    type: "string",
  },
});

module.exports = validator;

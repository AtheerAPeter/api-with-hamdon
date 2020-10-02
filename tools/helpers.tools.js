//this is just a return object formatted so we can use everywhere

//when theres error we use this
module.exports.resError = (res, error, statusCode = 400) => {
  let data = { status: false, error };
  res.statusCode = statusCode;
  return res.json(data);
};

//when theres no error we use this
module.exports.resData = (res, data, statusCode = 200) => {
  let response = { status: true, data };
  res.statusCode = statusCode;
  return res.json(response);
};

let defaultMiddleware = (req, res, next) => {
  let headers = req.headers;
  if (headers.user == 1) next();
  return res.json("not authorized");
};

let notFound = (req, res, next) => {
  res.statusCode = 404;
  return res.json("404 not found");
};

module.exports.defaultMiddleware = defaultMiddleware;
module.exports.notFound = notFound;

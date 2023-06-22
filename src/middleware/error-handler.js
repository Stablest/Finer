const CustomAPIError = require("../errors/custom-api-error");

const errorHandler = (err, req, res, next) => {
  let responseError = {
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong",
  };
  return res
    .status(responseError.statusCode)
    .json({ message: responseError.message });
};

module.exports = { errorHandler };

const CustomAPIError = require("./custom-api-error");

module.exports = class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
};

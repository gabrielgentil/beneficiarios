module.exports = class APIError extends Error {
  constructor(message, code = 500, data = null, type = "api_error") {
    super(message);
    this.code = code;
    this.data = data;
    this.type = type;
    this.name = "APIError";
    Error.captureStackTrace(this, APIError);
  }
};

const { Logger } = require("node-core-utils");
const logger = new Logger("Middleware");

function logRequest(req, res, next) {
  logger.info(`logRequest`);
  next();
}

module.exports = { logRequest };

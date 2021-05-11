const {
    Logger
} = require("node-core-utils");

const logger = new Logger("Middleware");

function logRequest(req, res, next) {
    logger.info('%s %s %s', req.method, req.path, req.ip);
    next();
}

module.exports = {
    logRequest
};
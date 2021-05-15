const { Logger } = require("node-core-utils");

function logRequest(request, response, next) {
  console.info(`\n Method: ${
    request.method
} ___ Route: ${
    request.originalUrl
} ___ Ip Address : ${request.connection.remoteAddress}
\n `);
const start = new Date().getTime();
response.on('finish', () => {
    const elepsTime = new Date().getTime() - start;
    console.info(`\n Method: ${
        request.method
    } ___ Route: ${
        request.originalUrl
    } ___ Status Code: ${
        response.statusCode
    } ___ Request Time: ${elepsTime}ms 
    
    \n`,);
});
  next();
}

module.exports = { logRequest };

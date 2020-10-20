const express = require("express");
const bodyParser = require("body-parser");
const { Logger } = require("node-core-utils");
const { walletAPI } = require("./api");
const defaultConfig = require("./config");
const walletData = require("./config/wallets");

class App {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };
    this.logger = new Logger("Intern Assessment");
    this.logger.info(`Starting...`);
    this.walletData = walletData;
    this.init();
  }
  init() {
    this.logger.info("Initializing");
    this.logger.debug(this.config);
    this.environment = this.config.environment;

    this.server = express();
    this.server.set("trust_proxy", this.config.trustProxy);
    this.server.set("json spaces", this.config.jsonSpaces);
    this.server.use(bodyParser.urlencoded(this.config.urlencoded));
    this.server.use(bodyParser.json({ limit: this.config.uploadLimit }));
    this.server.set("app", this);
    this.server.use("/api", this.logRequest);
    this.server.use("/api/wallets", walletAPI);

    this.logger.info(`Initialized`);
  }

  start() {
    this.server.listen(this.config.port, () => {
      this.logger.info(`listening on http://localhost:${this.config.port}`);
    });
    this.logger.info(`started in ${this.environment}.`);
  }

  async exit() {
    this.logger.info(`exiting`);
    process.exit();
  }

  logRequest(req, res, next) {
    next();
  }

  getWallets() {
    return new Promise((resolve) => {
      resolve(this.walletData);
    });
  }
}

if (require.main === module) {
  const app = new App();
  app.start();
} else {
  module.exports = App;
}

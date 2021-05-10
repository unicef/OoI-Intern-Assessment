const express = require("express");
const bodyParser = require("body-parser");
const { Logger } = require("node-core-utils");
const defaultConfig = require("./config");
const { MongoDB } = require("./lib/db");
const { logRequest } = require("./lib/middleware");
const { API } = require("./lib/api");

class App {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };
    this.logger = new Logger("Intern Assessment");
    this.logger.info(`Starting...`);
    this.logRequest = logRequest;
    this.db = new MongoDB(this.config.db);

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
    this.server.use("/api", API);

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

  async getStatus() {
    return await this.db.models.Example.countDocuments();
  }
}

if (require.main === module) {
  const app = new App();
  app.start();
} else {
  module.exports = App;
}

const express = require("express");
const bodyParser = require("body-parser");
const defaultConfig = require("./config");
const { MongoDB } = require("./lib/db");
const { logRequest } = require("./lib/middleware");
const { API } = require("./lib/api");
const cors = require('cors')
class App {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };
    console.info(`Starting...`);
    this.logRequest = logRequest;
    this.db = new MongoDB(this.config.db);
    this.startTime=new Date()
    this.init();
  }
  init() {
    console.info("Initializing");
    console.info(this.config);
    this.environment = this.config.environment;

    this.server = express();
    this.server.set("trust_proxy", this.config.trustProxy);
    this.server.set("json spaces", this.config.jsonSpaces);
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded(this.config.urlencoded));
    this.server.use(bodyParser.json({ limit: this.config.uploadLimit }));
    this.server.set("app", this);
    this.server.use("/api", this.logRequest);
    this.server.use("/api", API);

    console.info(`Initialized`);
  }

  start() {
    
    this.server.listen(this.config.port, () => {
      console.info(`listening on http://localhost:${this.config.port } on ${this.startTime}`);
    });
    console.info(`started in ${this.environment}.`);
  }

  async exit() {
    console.info(`exiting`);
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

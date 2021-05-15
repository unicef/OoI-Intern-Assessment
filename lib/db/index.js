const mongoose = require("mongoose");
const models = require("./models");

class MongoDB {
  constructor(config) {
    this.config = config || {
      url: process.env.DB_URL || "mongodb://localhost:27017",
      database: process.env.DB_NAME || "juniper",
      mongooseCfg: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    };
    this.models = models;
    this.connectionString = `${this.config.url}/${this.config.database}`;

    console.info(`Starting...`);
    this.init();
  }

  async init() {
    console.info("Initializing:");
    console.info(this.config);
    try {
      this.mongoose = await mongoose.connect(
        this.connectionString,
        this.config.mongooseCfg
      );
      console.log('mongo connected')
    } catch (e) {
      return console.error(e);
    }

    console.info(`Connected: ${this.connectionString}`);
    console.info("Initialized");
  }

  async disconnect() {
    await this.mongoose.connection.close();
  }
}

module.exports = { MongoDB };

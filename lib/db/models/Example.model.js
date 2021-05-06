const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const example = new Schema({
  field: { type: String },
});

const Example = mongoose.model("Example", example);

module.exports = Example;

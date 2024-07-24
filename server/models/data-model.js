const { Schema, model } = require("mongoose");

const DataSchema = new Schema({});

const Data = new model("dataCollection", DataSchema);
module.exports = Data;
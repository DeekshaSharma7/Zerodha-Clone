const { model } = require("mongoose");

const { PositionsModel } = require("../schemas/PositionsModel");

const PositionsModel = new model("position", PositionsModel);

model.exports = { PositionsModel };
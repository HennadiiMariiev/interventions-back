const { add } = require("./add.intervention.controller");
const { getAll } = require("./getAll.intervention.controller");
const { getLastFive } = require("./getLastFive.intervention.controller");
const { remove } = require("./remove.intervention.controller");

module.exports = {
  add,
  getAll,
  remove,
  getLastFive,
};

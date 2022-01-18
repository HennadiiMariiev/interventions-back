const { add } = require("./add.intervention.service");
const { getAll } = require("./getAll.intervention.service");
const { getLastFive } = require("./getLastFive.intervention.service");

const { remove } = require("./remove.intervention.service");

module.exports = {
  add,
  getAll,
  remove,
  getLastFive,
};

const { add } = require("./add.intervention.controller");
const { getAll } = require("./getAll.intervention.controller");
const { getLastFive } = require("./getLastFive.intervention.controller");
const { remove } = require("./remove.intervention.controller");
const { addList } = require("./addList.intervention.controller");

module.exports = {
  add,
  getAll,
  remove,
  getLastFive,
  addList,
};

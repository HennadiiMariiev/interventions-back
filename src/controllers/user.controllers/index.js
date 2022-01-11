const { registration } = require("./registration.controller");
const { login } = require("./login.controller");
const { logout } = require("./logout.controller");
const { refresh } = require("./refresh.controller");

module.exports = {
  registration,
  login,
  logout,
  refresh,
};

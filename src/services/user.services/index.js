const { registration } = require("./registration.service");
const { login } = require("./login.service");
const { logout } = require("./logout.service");
const { refresh } = require("./refresh.service");

module.exports = {
  registration,
  login,
  logout,
  refresh,
};

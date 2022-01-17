const {
  DB_URL,
  DB_NAME,
  PORT,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  NODE_ENV,
  FRONTEND_APP_URL,
  ACCESS_EXPIRES_IN,
  REFRESH_EXPIRES_IN,
  USER_1_ID,
  USER_2_ID,
  TEST_USER_1_ID,
  TEST_USER_2_ID,
} = require("./config");
const { SALT_COUNT, MONTHES_ENUM } = require("./constants");
const { connectDatabase } = require("./db.connect");

module.exports = {
  DB_URL,
  DB_NAME,
  SALT_COUNT,
  PORT,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_EXPIRES_IN,
  REFRESH_EXPIRES_IN,
  NODE_ENV,
  FRONTEND_APP_URL,
  connectDatabase,
  MONTHES_ENUM,
  USER_1_ID,
  USER_2_ID,
  TEST_USER_1_ID,
  TEST_USER_2_ID,
};

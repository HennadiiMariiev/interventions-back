const dotenv = require('dotenv');
dotenv.config();

const {
  NODE_ENV,
  FRONTEND_APP_URL,
  DB_URL,
  DB_NAME,
  PORT,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_EXPIRES_IN,
  REFRESH_EXPIRES_IN,
} = process.env;

module.exports = {
  NODE_ENV,
  FRONTEND_APP_URL,
  DB_URL,
  DB_NAME,
  PORT,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_EXPIRES_IN,
  REFRESH_EXPIRES_IN,
};

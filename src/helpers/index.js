const { asyncWrapper } = require("./wrapper");
const {
  isErrorOrFalsyValue,
  responseWithError,
} = require("./controller.helpers");

const {
  isDuplicateKeyError,
  getCategories,
  getType,
  formattedDate,
  checkFieldsOnUserUpdate,
  generatePhoneCode,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getMonthIndexByDate,
  initializeSummary,
} = require("./service.helpers");

const {
  responseErrorOrNext,
  validateObject,
  isValidId,
  isTokenExpiredError,
  isLoggedIn,
  clearTempFolder,
} = require("./middleware.helpers");

module.exports = {
  asyncWrapper,
  isDuplicateKeyError,
  isErrorOrFalsyValue,
  responseWithError,
  responseErrorOrNext,
  validateObject,
  isValidId,
  isTokenExpiredError,
  isLoggedIn,
  formattedDate,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getMonthIndexByDate,
  initializeSummary,
};

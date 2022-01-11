const isDuplicateKeyError = (error) => error.code === 11000;

const formattedDate = (date) => new Date(date).getTime();

const getFirstDayOfMonth = (year, month) => {
  const date = new Date(year, month, 1);
  return formattedDate(date.toString());
};

const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 2, -1);
  return formattedDate(date.toString());
};

const getMonthIndexByDate = (date) => {
  const newDate = new Date(date);
  return newDate.getMonth();
};

const initializeSummary = (monthesArr) =>
  monthesArr.map((month) => {
    return {
      month,
      codes: [],
      total: 0,
    };
  });

module.exports = {
  isDuplicateKeyError,
  formattedDate,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getMonthIndexByDate,
  initializeSummary,
};

const { Intervention } = require("../../model");
const {
  formattedDate,
  initializeSummary,
  getMonthIndexByDate,
  getFirstDayOfMonth,
  getLastDayOfMonth,
} = require("../../helpers");
const { MONTHES_ENUM } = require("../../config");

const getAll = async ({ user: { _id } }, query) => {
  try {
    const currentYear = new Date().getFullYear();
    const summary = initializeSummary(MONTHES_ENUM);
    const interventionsByOwner = await Intervention.find({ owner: _id });

    let total = 0;

    const result = interventionsByOwner.reduce(
      (acc, intervention) => {
        const { code, amount, date } = intervention;
        const monthIndex = getMonthIndexByDate(date);
        const startDate = getFirstDayOfMonth(currentYear, monthIndex);
        const endDate = getLastDayOfMonth(currentYear, monthIndex);

        if (
          formattedDate(date) >= startDate &&
          formattedDate(date) <= endDate
        ) {
          const elIndex = summary[monthIndex].codes.findIndex(
            (el) => el.code === code
          );
          if (elIndex !== -1) {
            summary[monthIndex].codes[elIndex].amount += amount;
          } else {
            summary[monthIndex].codes.push({ code, amount });
          }

          summary[monthIndex].total += amount;
          total += amount;
        }

        return [...acc];
      },
      [...summary]
    );
    return { result, total };
  } catch (error) {
    return error;
  }
};

module.exports = { getAll };

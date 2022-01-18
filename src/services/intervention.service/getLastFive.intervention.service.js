const { Intervention } = require("../../model");
const { USER_1_ID } = require("../../config");

const getLastFive = async () => {
  try {
    const interventions = await Intervention.find({
      owner: USER_1_ID,
    })
      .sort({ createdAt: "desc" })
      .limit(5);

    return interventions;
  } catch (error) {
    return error;
  }
};

module.exports = { getLastFive };

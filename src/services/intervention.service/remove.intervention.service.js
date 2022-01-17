const { Intervention } = require("../../model");
const { USER_1_ID } = require("../../config");

const remove = async ({ interventionId }, { user: { _id } }) => {
  try {
    return await Intervention.findOneAndDelete({
      owner: USER_1_ID,
      _id: interventionId,
    }).populate("owner", "email");
  } catch (error) {
    return error;
  }
};

module.exports = { remove };

const { Intervention } = require("../../model");

const remove = async ({ interventionId }, { user: { _id } }) => {
  try {
    return await Intervention.findOneAndDelete({
      owner: _id,
      _id: interventionId,
    }).populate("owner", "email");
  } catch (error) {
    return error;
  }
};

module.exports = { remove };

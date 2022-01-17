const { Intervention } = require("../../model");
const { USER_1_ID } = require("../../config");

const add = async (body) => {
  try {
    const {
      user: { _id },
      code,
      date,
      amount,
    } = body;

    const intervention = await new Intervention({
      code,
      date,
      owner: USER_1_ID,
    }).populate("owner", "email");

    if (amount) {
      intervention.amount = amount;
    }

    await intervention.save();

    return intervention;
  } catch (error) {
    return error;
  }
};

module.exports = { add };

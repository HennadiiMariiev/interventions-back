const { Intervention } = require("../../model");

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
      owner: _id,
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

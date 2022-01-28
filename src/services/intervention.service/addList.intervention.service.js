const { Intervention } = require("../../model");
const { USER_1_ID } = require("../../config");

const addList = async (body) => {
  try {
    const { codes } = body;

    codes.forEach(async (code) => {
      if (code) {
        const intervention = await new Intervention({
          code,
          date: Date.now(),
          owner: USER_1_ID,
        }).populate("owner", "email");
        await intervention.save();
      }
    });

    return codes;
  } catch (error) {
    return error;
  }
};

module.exports = { addList };

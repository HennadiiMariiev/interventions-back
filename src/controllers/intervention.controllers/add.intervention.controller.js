const { InterventionService } = require("../../services");
const { isErrorOrFalsyValue } = require("../../helpers");
// const { TransactionDTO } = require("../../DTO");

const add = async (req, res, next) => {
  const intervention = await InterventionService.add(req.body);

  if (isErrorOrFalsyValue(intervention)) {
    return next(intervention);
  }

  const { _id, code, amount, date, owner } = intervention;

  res
    .status(201)
    .json({ message: "success", data: { _id, code, amount, date, owner } });
};

module.exports = { add };

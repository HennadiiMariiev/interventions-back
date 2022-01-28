const { InterventionService } = require("../../services");
const { isErrorOrFalsyValue } = require("../../helpers");

const addList = async (req, res, next) => {
  const interventions = await InterventionService.addList(req.body);

  if (isErrorOrFalsyValue(interventions)) {
    return next(interventions);
  }

  res.status(201).json({ message: "success", data: { interventions } });
};

module.exports = { addList };

const { InterventionService } = require("../../services");
const { isErrorOrFalsyValue } = require("../../helpers");

const getAll = async (req, res, next) => {
  const interventions = await InterventionService.getAll(req.body, req.query);

  if (isErrorOrFalsyValue(interventions)) {
    return next(interventions);
  }

  res.status(200).json({ message: "success", data: { ...interventions } });
};

module.exports = { getAll };

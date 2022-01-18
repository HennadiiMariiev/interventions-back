const { InterventionService } = require("../../services");
const { isErrorOrFalsyValue } = require("../../helpers");

const getLastFive = async (req, res, next) => {
  const interventions = await InterventionService.getLastFive();

  if (isErrorOrFalsyValue(interventions)) {
    return next(interventions);
  }

  res.status(200).json({ message: "success", data: { interventions } });
};

module.exports = { getLastFive };

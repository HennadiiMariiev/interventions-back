const { InterventionService } = require("../../services");
const { isErrorOrFalsyValue } = require("../../helpers");
// const { interventionDTO } = require("../../DTO");

const remove = async (req, res, next) => {
  const intervention = await InterventionService.remove(req.params, req.body);

  if (isErrorOrFalsyValue(intervention)) {
    return next(intervention);
  }

  res.status(204).json({ message: "success" });
};

module.exports = { remove };

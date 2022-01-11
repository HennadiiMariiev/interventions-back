const { responseErrorOrNext, validateObject } = require("../helpers");
const { joiInterventionSchema } = require("../model");

const interventionAddValidation = async (req, res, next) => {
  const { error } = validateObject(req.body, joiInterventionSchema);

  responseErrorOrNext(error, res, next);
};

module.exports = {
  interventionAddValidation,
};

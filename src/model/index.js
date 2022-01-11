const { User } = require("./user.schema");
const { Intervention } = require("./intervention.schema");
const {
  joiUserRegistrationSchema,
  joiInterventionSchema,
} = require("./joi.schemas");

module.exports = {
  User,
  Intervention,
  joiUserRegistrationSchema,
  joiInterventionSchema,
};

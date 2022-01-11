const joi = require("joi");
const PasswordComplexity = require("joi-password-complexity");

const joiUserRegistrationSchema = joi.object({
  email: joi.string().email({ minDomainSegments: 2 }).required(),

  password: PasswordComplexity({
    min: 8,
    max: 12,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  }).required(),
});

const joiInterventionSchema = joi.object({
  code: joi
    .string()
    .regex(/(\d{5}[-]\d{2})\b/, "'97123-12'")
    .required(),

  date: joi.date().required(),

  amount: joi.number(),

  user: joi.any(),
});

module.exports = {
  joiUserRegistrationSchema,
  joiInterventionSchema,
};

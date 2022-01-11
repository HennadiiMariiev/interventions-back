const { responseErrorOrNext, validateObject } = require("../helpers");
const { joiUserRegistrationSchema } = require("../model");

const userValidation = async (req, res, next) => {
  const requiredFields = ["email", "password"];

  const { error } = validateObject(
    req.body,
    joiUserRegistrationSchema,
    requiredFields
  );

  responseErrorOrNext(error, res, next);
};

const userEmailValidation = async (req, res, next) => {
  const { error } = validateObject(req.body, joiUserRegistrationSchema, [
    "email",
  ]);

  responseErrorOrNext(error, res, next);
};

module.exports = {
  userValidation,
  userEmailValidation,
};

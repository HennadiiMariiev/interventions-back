const { v4 } = require("uuid");
const { BadRequest } = require("http-errors");
const { User } = require("../../model");
const { isDuplicateKeyError } = require("../../helpers");
const TokenService = require("../token.service");

const registration = async (user) => {
  try {
    const { email, password } = user;
    const tokens = TokenService.generateTokens(email);
    const { refreshToken } = tokens;

    const newUser = new User({
      email,
      refreshToken,
    });

    newUser.setPassword(password);

    await newUser.save();

    return { newUser, tokens };
  } catch (error) {
    return isDuplicateKeyError(error)
      ? new BadRequest("User with same email already exists.")
      : error;
  }
};

module.exports = { registration };

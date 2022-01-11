const { UserService } = require("../../services");
const { isErrorOrFalsyValue, responseWithError } = require("../../helpers");
// const { cookieOptions } = require('../../config');
const { UserDTO } = require("../../DTO");

const login = async (req, res, next) => {
  const { user, tokens } = await UserService.login(req.body);

  if (isErrorOrFalsyValue(user)) {
    return responseWithError(user, next);
  }

  const { email, _id } = user;

  res.status(200).json({
    message: "success",
    data: {
      user: {
        email,
        _id,
      },
      ...tokens,
    },
  });
};

module.exports = { login };

const express = require("express");
const { asyncWrapper } = require("../helpers");
const { userController } = require("../controllers");
const {
  userValidation,
  checkUserCredentials,
  authenticateUser,
} = require("../middlewares");

const userRouter = express.Router();

userRouter.post(
  "/registration",
  asyncWrapper(userValidation, userController.registration)
);
userRouter.post(
  "/login",
  asyncWrapper(userValidation, checkUserCredentials, userController.login)
);
userRouter.post(
  "/logout",
  asyncWrapper(authenticateUser, userController.logout)
);
userRouter.post("/refresh", asyncWrapper(userController.refresh));

module.exports = { userRouter };

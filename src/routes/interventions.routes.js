const express = require("express");
const { asyncWrapper } = require("../helpers");
const { interventionController } = require("../controllers");
const {
  authenticateUser,
  interventionAddValidation,
} = require("../middlewares");

const interventionRouter = express.Router();

interventionRouter.post(
  "/",
  asyncWrapper(
    authenticateUser,
    interventionAddValidation,
    interventionController.add
  )
);

interventionRouter.get(
  "/",
  asyncWrapper(authenticateUser, interventionController.getAll)
);

interventionRouter.delete(
  "/:interventionId",
  asyncWrapper(authenticateUser, interventionController.remove)
);

module.exports = { interventionRouter };

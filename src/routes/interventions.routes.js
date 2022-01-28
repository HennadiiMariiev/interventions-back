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

interventionRouter.post(
  "/add_list",
  asyncWrapper(authenticateUser, interventionController.addList)
);

interventionRouter.get(
  "/",
  asyncWrapper(authenticateUser, interventionController.getAll)
);

interventionRouter.get(
  "/last_five",
  asyncWrapper(authenticateUser, interventionController.getLastFive)
);

interventionRouter.delete(
  "/:interventionId",
  asyncWrapper(authenticateUser, interventionController.remove)
);

module.exports = { interventionRouter };

const ErrorResponse = require("../utils/errorResponse");
const catchAsync = require("../middleware/async");
const User = require("../models/User");

exports.register = catchAsync(async (req, res, next) => {
  res.status(200).json({
    success: "true",
  });
});

const { body, param, validationResult } = require("express-validator");

exports.errorhandler = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty())
    return res.status(422).json({
      error: error
        .array()
        .map((err) => err.msg)
        .toString(),
    });
  next();
};

exports.urlvalidation = [
  body("url").isURL().withMessage("Url Format Error").exists(),
];

exports.codevalidation = [
  param("code").isLength({ min: 5 }).isLength({ max: 9 }),
];

const router = require("express").Router();
const { geturl, posturl } = require("../controllers/url");
const {
  urlvalidation,
  codevalidation,
  errorhandler,
} = require("../middlewares/validator");
router.route("").post(urlvalidation, errorhandler, posturl);

router.route("/:code").get(codevalidation, errorhandler, geturl);

module.exports = router;

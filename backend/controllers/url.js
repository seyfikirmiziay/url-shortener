const { getvalidcode } = require("../utils/helper");
const Url = require("../models/url");
//
const geturl = async (req, res) => {
  const { code } = req.params;
  const isExits = await Url.findOne({ code: code });
  if (!isExits) return res.status(404).json({ msg: "code not exits" });
  res.json({ url: isExits.url });
};

const posturl = async (req, res) => {
  const { url } = req.body;
  const isUrl = await Url.findOne({ url: url });
  if (isUrl) return res.json({ code: isUrl.code });
  const code = await getvalidcode();
  const newItem = new Url({
    url: url,
    code: code,
  });
  await newItem.save();
  return res.json({ code: code });
};
module.exports = { geturl, posturl };

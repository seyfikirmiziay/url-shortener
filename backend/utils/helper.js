const Url = require("../models/url");

exports.shorturlgenerator = (lenght) => {
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var code = "";
  for (i = 0; i < lenght; i++) {
    code += keys.charAt(Math.floor(Math.random() * keys.length));
  }
  return code;
};

exports.getvalidcode = async () => {
  var count = 0;
  var lenght = 5;
  var isValid = false;
  var validcode = "";
  while (!isValid) {
    if (count > 20) lenght++;
    const code = this.shorturlgenerator(lenght);
    const isAvaible = await Url.findOne({ code: code });
    if (!isAvaible) {
      isValid = true;
      validcode = code;
    }
    count++;
  }
  return validcode;
};

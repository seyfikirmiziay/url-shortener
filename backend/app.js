require("dotenv").config();
require("express-async-errors");
//
const app = require("express")();

//
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

//
const urlRouter = require("./routes/url");
//
const { errorhandler } = require("./middlewares/errorhandler");
const { notfound } = require("./middlewares/notfound");

//
app.use(helmet());
app.use(cors());

app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//
app.use("/url", urlRouter);
//
app.use(notfound);
app.use(errorhandler);
//
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () => {
      console.log("db connection success");
      console.log(`Server working on ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

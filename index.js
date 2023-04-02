const http = require("http"),
  path = require("path"),
  express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  db = require("./model");
dotenv = require("dotenv").config();
let app = express();

app.use(cors());

app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes"));

try {
  db.sequelize.sync();
} catch (error) {
  console.log(error);
}
/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.log(err.stack);

  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

let server = app.listen(process.env.PORT || 3001, function () {
  console.log("Listening on port " + server.address().port);
});

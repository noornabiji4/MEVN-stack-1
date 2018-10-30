const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

console.log("noor");
const port = 8081;
app.listen(port, (req, res) =>
  console.log(`Example app listening on port ${port}!`)
);

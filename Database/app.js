require("dotenv").config();
require("./connection/dbconn");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./router/router");
const app = express();
app.use(router);
app.use(cookieParser());
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.SERVER_PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

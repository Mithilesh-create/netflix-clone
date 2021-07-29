require("dotenv").config();
require("./connection/dbconn");
const express = require("express");
const router = require("./router/router");
const app = express();
const port = process.env.SERVER_PORT;
const path = require("path");
const cors = require("cors");
app.use(router);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

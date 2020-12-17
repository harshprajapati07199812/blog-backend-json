const express = require("express");
const app = express();
const blogrouter = require("./router/blogrouter");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config.env") });

app.use("/blogs", blogrouter);
app.listen(process.env.PORT, () => {
  console.log(" listening To the port", process.env.PORT);
});

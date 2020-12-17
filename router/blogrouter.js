const express = require("express");
const { getAllBlogs, getBlogById } = require("../controller/blog-controller");

const router = express.Router();
router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlogById);

module.exports = router;

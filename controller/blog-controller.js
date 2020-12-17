const express = require("express");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const blogpath = path.join(__dirname, "..", "data", "data.json");

let data = JSON.parse(fs.readFileSync(blogpath));
const getAllBlogs = (req, res, next) => {
  res.status(200).json({
    status: "successful",
    data: data,
  });
};

const getBlogById = (req, res, next) => {
  const id = req.params.id;
  let result = data.find((blog) => req.params.id == blog.id);
  if (result) {
    res.status(200).json({
      status: "successful",
      data: result,
    });
  } else {
    res.status(400).json({
      status: "unsuccessful",
      message: " Blog Not found",
    });
  }
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogById = getBlogById;

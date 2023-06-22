const express = require("express");
const { app } = require("./app");
require("dotenv").config();

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();

require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const app = express();
const optimize = require("./routes/optimize");

app.use(express.raw({ type: "image/*", limit: "50mb" }));

// Routes

app.use("/api/v1/optimize", optimize);

// Error

app.use(notFound);

// App

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

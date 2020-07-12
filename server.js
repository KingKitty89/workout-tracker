const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3200;
const app = express();


const htmlRoutes = require("./routes/html");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(htmlRoutes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

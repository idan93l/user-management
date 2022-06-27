require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose");
const userRoutes = require("./routes/routes.js");

// const publicPath = path.join(__dirname, "../client/build");

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(publicPath));
app.use(userRoutes);

mongoose.connect(uri, () => console.log("connected to mongoDB"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server runs on port ${PORT}`);
});

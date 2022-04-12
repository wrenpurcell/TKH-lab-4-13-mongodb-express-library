const express = require("express");
const mongoose = require("mongoose");
const libraryRouter = require("./routes/libraryRoutes.js");
require("dotenv").config();
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

PORT = process.env.PORT
MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(libraryRouter);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

// CONFIGURATION
dotenv.config();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;
const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send({
    message: "Hello from Espresso Emporium!",
  });
});

// START THE SERVER
const client = new MongoClient(URL);
client
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Mongodb Connected on Port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Server didn't connected ${error}`));

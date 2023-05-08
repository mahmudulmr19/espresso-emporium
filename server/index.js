const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

// CONFIGURATION
dotenv.config();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;
const client = new MongoClient(URL);
const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send({
    message: "Hello from Espresso Emporium!",
  });
});

app.post("/api/v1/coffees", async (req, res) => {
  const coffee = req.body;
  const collection = client.db("Espresso").collection("coffees");
  const result = await collection.insertOne(coffee);
  res.status(201).send(result);
});

app.get("/api/v1/coffees", async (req, res) => {
  const collection = client.db("Espresso").collection("coffees");
  const result = await collection.find().toArray();
  res.status(200).send(result);
});

// START THE SERVER
client
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Mongodb Connected on Port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Server didn't connected ${error}`));

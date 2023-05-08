const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");

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
  res.send(result);
});

app.put("/api/v1/coffees/:id", async (req, res) => {
  const id = req.params.id;
  const coffee = req.body;
  const collection = client.db("Espresso").collection("coffees");
  const filter = { _id: new ObjectId(id) };
  const option = { upsert: true };
  const updatedCoffee = {
    $set: {
      name: coffee.name,
      chef: coffee.chef,
      supplier: coffee.supplier,
      taste: coffee.taste,
      category: coffee.category,
      details: coffee.details,
      photo: coffee.photo,
    },
  };
  const result = await collection.updateOne(filter, updatedCoffee, option);
  res.send(result);
});

app.get("/api/v1/coffees", async (req, res) => {
  const collection = client.db("Espresso").collection("coffees");
  const result = await collection.find().toArray();
  res.send(result);
});

app.get("/api/v1/coffees/:id", async (req, res) => {
  const id = req.params.id;
  const collection = client.db("Espresso").collection("coffees");
  const result = await collection.findOne({ _id: new ObjectId(id) });
  res.send(result);
});

app.delete("/api/v1/coffees/:id", async (req, res) => {
  const id = req.params.id;
  const collection = client.db("Espresso").collection("coffees");
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
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

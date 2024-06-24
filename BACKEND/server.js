const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const products = {
  1: {
    id: 1,
    name: "Smartphone",
    description:
      "A smartphone keeps people connected through instant messaging services, email, and social networking apps, as well as text messages and phone calls.",
    price: 1500,
    available: true,
  },
};


  const createNextId = () =>
    Number.parseInt(
      Math.max(...Object.keys(products).map((key) => Number.parseInt(key))),
      10
    ) + 1;

  const addProduct =({ name, description, price, available}) =>{
    const id = createNextId();
    products[id] = {
      id,
      name,
      description,
      price,
      available,
    };
    return products[id]
  }


const getProducts = () => products;

app.post("/products", (req, res) => {
  const product = addProduct(req.body);
  res.json(product);
});

app.get("/products", (req, res) => {
  res.json(Object.values(getProducts()));
});



app.listen(8000, () => console.log("Server running on port 8000"));

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const products = [
  {
    id: 1,
    name: "Kamera",
    price: 10.99,
    imageUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Sepatu",
    price: 19.99,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 3,
    name: "Headset",
    price: 7.99,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

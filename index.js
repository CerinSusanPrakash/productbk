const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
require('./connection');
const connectDB = require("./connection");
const Product = require('./models/productModel');

// Enable CORS for all origins (use in development for simplicity)
// app.use(cors());

app.use(cors(
  {
    origin: ["https://productfrt.vercel.app"],
    methods: ["POST","GET","PUT","DELETE"],
    credentials: true
  }
));

app.get('/',(req,res)=>{
  res.json("Backend working");
})

// If you want to allow specific origins only, use this instead:
// app.use(cors({
//   origin: 'http://localhost:5173' // Allow only the React frontend
// }));

app.use(express.json()); // To parse JSON bodies

// Your product routes
app.get('/getproducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/addproducts', async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const newProduct = new Product({ name, description, price });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product
app.put('/updateproduct/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true } // Return the updated product
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a product
app.delete('/deleteproduct/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(5000, () => {
  console.log('Server is running on PORT 5000');
});

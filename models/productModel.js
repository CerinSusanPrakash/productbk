const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
}, {
  timestamps: true  // Automatically create createdAt and updatedAt fields
});

// Create the Product model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

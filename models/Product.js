const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [String], // An array of tags
  images: [String], // URLs or file paths for images
  carType: {
    type: String,
    required: true,
  },
  company: String,
  dealer: String,
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Reference to the User who created this product
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

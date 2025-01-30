const express = require('express');
const Product = require('../models/Product'); // Import the Product model
const router = express.Router(); // Create an instance of the Express Router

// Middleware for user authentication (if needed)
const authMiddleware = require('../middleware/auth');

// Create Product - POST request
router.post('/api/products', authMiddleware, async (req, res) => {
  // We'll write this code next
});

// Get all Products - GET request
router.get('/api/products', authMiddleware, async (req, res) => {
  // We'll write this code next
});

// Get a single Product - GET request
router.get('/api/products/:id', authMiddleware, async (req, res) => {
  // We'll write this code next
});

// Update Product - PUT request
router.put('/api/products/:id', authMiddleware, async (req, res) => {
  // We'll write this code next
});

// Delete Product - DELETE request
router.delete('/api/products/:id', authMiddleware, async (req, res) => {
  // We'll write this code next
});

module.exports = router; // Export the router for use in server.js

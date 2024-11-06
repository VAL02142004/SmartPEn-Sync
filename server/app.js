// server/app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; // You can change the port if needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smartpen-sync', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Middleware to parse JSON request bodies
app.use(express.json());

// Import and use routes (assuming you have defined routes in a 'routes' folder)
const notesRoutes = require('./routes/notes'); // Example: import notes routes
app.use('/api/notes', notesRoutes); // Mount notes routes under '/api/notes'

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
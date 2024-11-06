// Assuming you're using MongoDB with Mongoose
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: String,
  // Add other fields like timestamp, pen type, etc.
});

module.exports = mongoose.model('Note', noteSchema);
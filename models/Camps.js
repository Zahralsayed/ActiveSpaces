const mongoose = require('mongoose');

const campsSchema = mongoose.Schema({
  title: String,
  content: String,
  isPublished: Boolean,
  totalWords: Number,
  pools: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pools'
  }]
}, {
  timestamps: true // means createdAt and updatedAt
});

const Camps = mongoose.model("Camps", campsSchema);

module.exports = {Camps};
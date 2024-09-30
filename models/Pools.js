const mongoose = require('mongoose');

const poolsSchema = mongoose.Schema({
  name: String,
  emailAddress: String,
  phoneNumber: String,
  camps: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camps"
  }]
}, {
  timestamps: true // means createdAt and updatedAt
})

const Pools = mongoose.model("Pools", poolsSchema);

module.exports = {Pools};

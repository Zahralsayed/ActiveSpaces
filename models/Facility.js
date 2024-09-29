const mongoose = require('mongoose')

const facilitySchema = mongoose.Schema({
    name: String,
    description: String,
    location: String,
    type: String,
    availableTime: Date,
    price: number,
    images: [String]		
}, {
    timestamps: true
})

const Facility = mongoose.model("Facility", facilitySchema)

module.exports = { Facility }
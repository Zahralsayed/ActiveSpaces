const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    email: email,
    password: String,
    firstName: String,
    lastName: String,
    role: String
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = { User }
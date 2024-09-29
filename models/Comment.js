const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comment: String,
    rate: String,
   }, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = { Comment }
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

const model = mongoose.model('messages', MessageSchema)

module.exports = model
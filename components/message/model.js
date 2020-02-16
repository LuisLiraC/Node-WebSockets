const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'users'
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
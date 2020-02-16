const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const model = mongoose.model('users', UserSchema)

module.exports = model
const dotenv = require('dotenv')
dotenv.config()
const db = require('mongoose')
const Model = require('./model')

// Connection 
db.Promise = global.Promise;
db.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('[db] Conectada con éxito')
  })
  .catch(error => {
    console.log(error)
  })


function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessages() {
  return messages = await Model.find()
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findOne({ _id: id})
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage
}
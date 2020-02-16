const Model = require('./model')

function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessages(filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter.user = new RegExp(filterUser, 'i')
  }
  return messages = await Model.find(filter)
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findOne({ _id: id})
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

async function deleteMessage(id) {
  await Model.deleteOne({ _id: id})
  return
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}
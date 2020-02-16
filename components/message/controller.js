const store = require('./store')

async function addMessage(user, message) {
  try {
    if (!user || !message) {
      console.log('[ERROR] [MESSAGE CONTROLLER] No hay usuario o mensaje')
      throw new Error()
    }

    const newMessage = {
      user,
      message,
      date: new Date()
    }
    store.addMessage(newMessage)
    return newMessage

  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

async function getMessages() {
  try {
    const result = await store.getMessages()
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addMessage,
  getMessages
}
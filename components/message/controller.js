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
    throw new Error('Error al obtener los datos')
  }
}

async function updateMessage(id, message) {
  try {
    if (!id || !message) {
      console.log('[ERROR] [MESSAGE CONTROLLER] No hay id o mensaje')
      throw new Error()
    }
    const result = await store.updateMessage(id, message)
    return result
  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage
}
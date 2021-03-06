const store = require('./store')
const socket = require('../../socket').socket
const config = require('../../config')

async function addMessage(user, message, file) {
  try {
    if (!user || !message) {
      console.log('[ERROR] [MESSAGE CONTROLLER] No hay usuario o mensaje')
      throw new Error()
    }

    let fileUrl = ''
    if (file) {
      fileUrl = `${config.host}:${config.port}/${config.publicRoute}/files/${file.filename}`
    }

    const newMessage = {
      user,
      message,
      date: new Date(),
      file: fileUrl
    }
    store.addMessage(newMessage)
    socket.io.emit('message', newMessage)
    return newMessage
  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

async function getMessages(filterUser) {
  try {
    const result = await store.getMessages(filterUser)
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

async function deleteMessage(id) {
  try {
    if (!id) {
      console.log('[ERROR] [MESSAGE CONTROLLER] No hay id')
      throw new Error()
    }
    await store.deleteMessage(id)
    return
  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}
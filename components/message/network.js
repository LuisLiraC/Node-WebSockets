const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', async (req, res) => {
  try {
    const filterMessages = req.query.user || null
    const messagesList = await controller.getMessages(filterMessages)
    response.success(req, res, messagesList, 200)
  } catch (error) {
    response.error(req, res, 'Unexpected error', 500, error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { user, message } = req.body
    const newMessage = await controller.addMessage(user, message)
    response.success(req, res, newMessage, 201)
  } catch (error) {
    response.error(req, res, 'Información inválida', 400, error.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { message } = req.body
    const result = await controller.updateMessage(id, message)
    response.success(req, res, result, 200)
  } catch (error) {
    response.error(req, res, 'Error interno', 500, error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await controller.deleteMessage(id)
    response.success(req, res, `Mensaje ${id} eliminado`, 200)
  } catch (error) {
    response.error(req, res, 'Error interno', 500, error)
  }
})

module.exports = router
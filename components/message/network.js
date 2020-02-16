const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', async (req, res) => {
  try {
    const messagesList = await controller.getMessages()
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

module.exports = router
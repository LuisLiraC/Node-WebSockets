const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', async (req, res) => {
  try {
    const usersList = await controller.getUsers()
    response.success(req, res, usersList, 200)
  } catch (error) {
    response.error(req, res, 'Unexpected error', 500, error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name } = req.body
    const newUser = await controller.addUser(name)
    response.success(req, res, newUser, 201)
  } catch (error) {
    response.error(req, res, 'Información inválida', 400, error.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updatedUser = await controller.updateUser(id, name)
    response.success(req, res, updatedUser, 200)
  } catch (error) {
    response.error(req, res, 'Error interno', 500, error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await controller.deleteUser(id)
    response.success(req, res, `Usuario ${id} eliminado`, 200)
  } catch (error) {
    response.error(req, res, 'Error interno', 500, error)
  }
})

module.exports = router
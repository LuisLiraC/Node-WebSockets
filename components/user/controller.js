const store = require('./store')

async function addUser(name) {
  try {
    if (!name) {
      console.log('[ERROR] [USER CONTROLLER] No hay usuario')
      throw new Error()
    }

    const newUser = {
      name
    }

    store.addUser(newUser)

    return newUser
  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

async function getUsers() {
  try {
    const result = await store.getUsers()
    return result
  } catch (error) {
    throw new Error('Error al obtener los datos')
  }
}

async function updateUser(id, name) {
  try {
    if (!id || !name) {
      console.log('[ERROR] [USER CONTROLLER] No hay id o nombre')
      throw new Error()
    }
    const result = await store.updateUser(id, name)
    return result
  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

async function deleteUser(id) {
  try {
    if (!id) {
      console.log('[ERROR] [USER CONTROLLER] No hay id')
      throw new Error()
    }
    await store.deleteUser(id)
    return
  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser
}
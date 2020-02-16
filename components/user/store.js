const Model = require('./model')

function addUser(user) {
  const myUser = new Model(user)
  myUser.save()
}

async function getUsers() {
  return users = await Model.find()
}

async function updateUser(id, name) {
  const foundUser = await Model.findOne({ _id: id})
  foundUser.name = name
  const newUser = await foundUser.save()
  return newUser
}

async function deleteUser(id) {
  await Model.deleteOne({ _id: id})
  return
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser
}
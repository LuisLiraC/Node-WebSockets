const db = require('mongoose')
db.Promise = global.Promise;

async function connect(URI) {
  try {
    await db.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('[db] Conectada con éxito')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connect


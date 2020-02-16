const config = require('./config')

const express = require('express')
const app = express()
const cors = require('cors')
const server = require('http').Server(app)
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db(config.dbUrl)

socket.connect(server)
app.use(cors())
app.use(express.json())

router(app)

app.use(`/${config.publicRoute}`, express.static('public'))


server.listen(config.port, () => {
  console.log(`Listening on ${config.host}:${config.port}`)
})
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT

const express = require('express')
const app = express()
const cors = require('cors')
const server = require('http').Server(app)
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db(process.env.MONGO_URI)
socket.connect(server)
app.use(cors())
app.use(express.json())

router(app)

app.use('/app', express.static('public'))


server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
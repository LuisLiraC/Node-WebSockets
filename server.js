const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const PORT = process.env.PORT

const db = require('./db')
db(process.env.MONGO_URI)

const router = require('./network/routes')

app.use(express.json())
router(app)

app.use('/app', express.static('public'))


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
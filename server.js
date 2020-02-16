const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./network/routes')

app.use(express.json())
router(app)

app.use('/app', express.static('public'))


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
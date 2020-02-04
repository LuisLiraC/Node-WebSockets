const express = require('express')
const router = express.Router()
const app = express()
const PORT = process.env.PORT || 3000
const response = require('./network/response')

app.use(express.json())
app.use(router) 

app.use('/app', express.static('public'))

router.get('/message', (req, res) => {
  console.table(req.headers)
  res.header({
    "custom-header": "valor personalizado"
  })
  response.success(req, res, 'Messages list')
})

router.post('/message', (req, res) => {

  if (req.query.error == 'ok') {
    response.error(req, res, 'Error inesperado', 500, 'Simulación de los errores')
    return
  }

  response.success(req, res, 'Created', 201)
})





app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
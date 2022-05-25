const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const port = 3000

app.use(basicAuth({
  users: { 'admin': 'supersecret' }
}))

app.use(function (req, res, next) {
  console.log('middleware 1')
  next()
})

app.get('/', (req, res) => {
  res.send('Teste!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

let vehicle = null

app.get('/', (req, res) => {
  res.redirect("http://localhost:8080")
})

app.get('/data', (req, res) => {
  res.send({ vehicle: vehicle })
})

app.post('/data', (req, res) => {
  // but it's not really posting any data yet
  vehicle = req.body.vehicle
  res.send('posted!')
})

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000')
})

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/data', (req, res) => {
  res.send('posted!')
})

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000')
})

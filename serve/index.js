const express = require('express')
const app = express()
app.get('/login', (req, res) => {
  res.json({
    name: 'test',
    age: 18
  })
})
app.listen(3000, () => {
    console.log('server is running at port 3000')
    })
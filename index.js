const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req,res) => {
  res.send('Server works')
})

app.listen(PORT, () => {
  console.log(`Server Listen at port ${PORT}`)
})

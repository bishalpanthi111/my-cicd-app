const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD app!')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

module.exports = app
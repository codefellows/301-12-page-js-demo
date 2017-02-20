const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))

function someFunk(req, res) {
  res.sendFile('index.html', {root: './public'})
}

app.get('/', someFunk)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

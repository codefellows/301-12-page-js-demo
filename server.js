const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('./public'))

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

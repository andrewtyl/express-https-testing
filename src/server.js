const app = require('./app')
const fs = require('fs')
const https = require('https')
const {PORT} = require('./config')

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(PORT, () => {
  console.log(`Server listening at https://localhost:${PORT}`)
})
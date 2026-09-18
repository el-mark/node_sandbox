// const http = require('http')
import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json'})
  res.end(JSON.stringify({ message: 'Hello' }))
})

server.listen(3000, () => console.log('Server started: Listening the 3000 port'))
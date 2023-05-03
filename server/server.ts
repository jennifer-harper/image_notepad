import { join } from 'node:path'
import express from 'express'
import welcome from './routes/welcome'
// import request from 'superagent'


const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, './public')))



server.use('/api/v1/welcome', welcome)

// This is the BrowserRouter config
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server

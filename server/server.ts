import { join } from 'node:path'
import express from 'express'
// import request from 'superagent'
const server = express()

import savedSearch from './routes/savedImgs'

server.use(express.json())
server.use(express.static(join(__dirname, './public')))



server.use('/api/v1/images', savedSearch)

// This is the BrowserRouter config
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server

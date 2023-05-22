import { join } from 'node:path'
import express from 'express'
import fileUpload from 'express-fileupload'
const server = express()

import savedSearch from './routes/savedImgs'
import combinedSave from './routes/combinedImg'
import uploadImgs from './routes/uploadImgs'

server.use(fileUpload())
server.use(express.json({ limit: '10mb' }))

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/images', savedSearch)
server.use('/api/v1/combinedImg', combinedSave)
server.use('/api/v1/uploads', uploadImgs)



// This is the BrowserRouter config
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
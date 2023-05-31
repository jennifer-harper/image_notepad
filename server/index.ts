import server from './server'

// Use these node modules to set up .env file
const path = require('path')
const dotenv = require('dotenv')

// get the path of .env
const envPath = path.join(__dirname, '../.env')

// tell dotenv node module where to find our .env file
dotenv.config({ path: envPath })

//^ Put your dotenv BEFORE setting up the server
const port = process.env.PORT || 3000
  

server.listen(port, function () {
  console.log('listening')
})



import server from './server'
// const port = 3000
const port = process.env.PORT || 3000

////for .env files
// const path = require('path')
// const dotenv = require('dotenv')
// const envPath = path.join(__dirname, '../.env')
// dotenv.config({ path: envPath })


server.listen(port, () => {
  console.log('Server listening on port', port)
})

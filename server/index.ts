import server from './server'

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('All G, connected')
})



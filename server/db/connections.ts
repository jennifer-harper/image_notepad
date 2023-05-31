import knex from 'knex'
import knexFile from './knexfile'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)



if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const envConfig = require('dotenv').config()    
    if(envConfig.error) throw envConfig.error    
}
    
    
export default connection
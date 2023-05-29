
import request from 'superagent'
import { Login } from '../../models/character'
const serverURL = '/api/v1/user'


export function getUser(data:Login){
    return request
    .post(`${serverURL}/login`) 
    .send(data) 
    .then((res) => res.body)
    .catch((error) => {
      throw error.response.body.msg
    })
}
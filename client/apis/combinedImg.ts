import request from 'superagent'
import * as Img from '../../models/character'
const serverURL = '/api/v1/combinedImg'

  export function combinedImgs(): Promise<Img.Combined[]>{
    return request.get(serverURL)
    .then(res => res.body)      
}

import request from 'superagent'
import * as Img from '../../models/character'
const serverURL = 'http://localhost:3000/api/v1'



export function getAllImgs(): Promise<Img.ImgSearch[]> {
  return request.get(serverURL)
    .then(res => res.body)
}

export function createImg(data:Img.ImgSearchData): Promise<Img.ImgSearch>{
  return request.post(serverURL)
    .send(data)
    .then(res => res.body)
}
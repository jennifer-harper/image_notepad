import request from 'superagent'
import * as Img from '../../models/character'
const serverURL = '/api/v1/images'

export function getAllImgs(): Promise<Img.ImgSearch[]> {
    return request.get(serverURL)
      .then(res => res.body)
}
  
  export function createImg(data:Img.ImgSearchData): Promise<Img.ImgSearch>{
    console.log(data)
    return request
    .post(serverURL)
    .send(data)
    .then(res => res.body)
  }
  
  export function delImg(id:number){
    return request.delete(`${serverURL}/${id}`)
    .then((res) => {return res.body})
  }

  export function getIdImg(id:number){
    return request
    .get(`${serverURL}/${id}`)
    .then(res => res.body)
  }

  export function editImg(id:number, data:Img.EditSearchData): Promise<Img.ImgSearch>{
    return request
      .patch(`${serverURL}/${id}`)
      .send(data)
      .then((res) => {
        return res.body;
      })
  }
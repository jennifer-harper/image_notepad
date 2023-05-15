import request from 'superagent'
import * as Img from '../../models/character'
const serverURL = '/api/v1/uploads'


export function getUploads(): Promise<Img.UploadImg[]> {
    return request.get(serverURL)
      .then(res => res.body)
  }
  
  export function createUpload(data:Img.UploadImgData): Promise<Img.UploadImg>{
    console.log(data)
    return request
    .post(serverURL)
    .send(data)
    .then(res => res.body)
  }
  
  export function delUpload(id:number){
    return request.delete(`${serverURL}/${id}`)
    .then((res) => {return res.body})
  }
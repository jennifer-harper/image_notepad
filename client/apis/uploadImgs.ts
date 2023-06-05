import request from 'superagent'
import * as Img from '../../models/uploads'
const serverURL = '/api/v1/uploads'


export function getUploads(): Promise<Img.UploadImg[]> {
    return request
    .get(serverURL)
    .then(res => res.body)
  }
  
  export function createUpload(data:Img.UploadImgData, token:string): Promise<Img.UploadImg>{
    return request
    .post(serverURL)
    .set('Authorization', `Bearer ${token}`)
    .send(data)
    .then(res => res.body)
  }
  
  export function delUpload(id:number){
    return request
    .delete(`${serverURL}/${id}`)
    .then((res) => {return res.body})
  }


  export function getIdUpload(id:number){
    return request
    .get(`${serverURL}/${id}`)
    .then(res => res.body)
  }

  export function editUpload(id:number, data:Img.UploadImgData): Promise<Img.UploadImg>{
    return request
      .patch(`${serverURL}/${id}`)
      .send(data)
      .then((res) => {
        return res.body;
      })
  }
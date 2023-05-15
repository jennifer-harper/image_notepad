import dbCon from './connections'
import * as Img from '../../models/character'

//*******************Get all
export function getUploadsDB(){
    return dbCon('upload-img')
}

//*******************Delete existing
export function delUploadsDB (id:number){
    return dbCon('upload-img').delete().where('id', id)
}
//*******************Create new
export function createUploadDB (data:Img.UploadImgData){
    return dbCon('upload-img').insert(data)
    .returning('*')
}
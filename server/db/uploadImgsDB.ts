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

export function getIdUploadDB(id:number){
    return dbCon('upload-img')
    .select("*")
    .where ('id', id)
    .first()
}

//create database function
export function editUploadDB(id: number, data:Img.UploadImgData){
    return dbCon('upload-img')
    .where('id', id)
    .update(data)
    .returning('*')
 }
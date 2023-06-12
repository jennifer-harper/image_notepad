import dbCon from './connection'
import * as Img from '../../models/uploads'

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


//*******************Get and edit based on id
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
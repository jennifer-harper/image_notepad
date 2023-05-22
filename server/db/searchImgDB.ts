import dbCon from './connections'
import * as Img from '../../models/character'

//*******************Get all
export function getAllImgsDB(){
    return dbCon('save-search')
}

export function delImgDB (id:number){
    return dbCon('save-search').delete().where('id', id)
}

export function createImgDB (data:Img.ImgSearchData){
    return dbCon('save-search').insert(data)
    .returning('*')
}


//*******************Get and edit based on id
export function getIdDB(id:number){
    return dbCon('save-search')
    .select("*")
    .where ('id', id)
    .first()
}

//create database function
export function editDB(id: number, data:Img.EditSearchData){
    return dbCon('save-search')
    .where('id', id)
    .update(data)
    .returning('*')
 }
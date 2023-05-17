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


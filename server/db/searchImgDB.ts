import connection from './connections'
import * as Img from '../../models/character'

//*******************Get all
export function getAllImgsDB(db = connection): Promise<Img.ImgSearch[]>{
    return db('save-search').select()
}

export function delImgDB (id:number, db = connection): Promise<number>{
    return db('save-search').delete().where('id', id)
}

export function createImgDB (data:Img.ImgSearchData, db = connection): Promise<Img.ImgSearchData[]>{
    return db('save-search').insert(data)
    .returning('*')
}
import connection from './connections'
import * as Img from '../../models/character'

//*******************Get all
export function getAllImgsDB(db = connection): Promise<Img.ImgSearch[]>{
    return db('save-search').select()
}
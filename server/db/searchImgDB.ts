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

export async function getAllCategories() {
    try {
      const saveSearchData = await dbCon('save-search')
      .select('save-search.id as save_search_id','category')

      const uploadImgData = await dbCon('upload-img')
      .select('upload-img.id as upload_img_id','category')

      const combinedData = [...saveSearchData, ...uploadImgData].map((data, index) => {
        return { id: index + 1, ...data }
      })

      console.log('data')

      return combinedData

    } catch (error) {
      console.error('Error retrieving data:', error)
      throw error
    }
  }
import dbCon from './connections'

//*******************Get all
export async function getAllCategories() {
    try {
      const saveSearchData = await dbCon('save-search')
      .select('save-search.id as save_search_id','category', 'src', 'url', "description")

      const uploadImgData = await dbCon('upload-img')
      .select('upload-img.id as upload_img_id','category', 'image')

      const combinedData = [...saveSearchData, ...uploadImgData].map((data, index) => {
        return { id: index + 1, ...data }
      })
      return combinedData

    } catch (error) {
      console.error('Error retrieving data:', error)
      throw error
    }
  }
  
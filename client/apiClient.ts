import request from 'superagent'
import * as Img from '../models/character'
const serverURL = '/api/v1/images'
//******************Unsplash API/

export function getUnsplash() {
  return request
    .get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_KEY}&orientation=landscape`)

    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}

export async function defineUnsplash(query: string){
  try {
    const res1 = await request
    .get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&per_page=12&orientation=landscape&query=${query}`)

    const totalPages = res1.body.total_pages
    const randomPageNumber = Math.floor(Math.random() * totalPages) + 1

    const res2 = await request.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&page=${randomPageNumber}&per_page=12&orientation=landscape&query=${query}`)
    console.log(res2.body)
    return res2.body

  } catch (err) {
    console.log('Err message: ' + err)
  }
}

export function getAllImgs(): Promise<Img.ImgSearch[]> {
  return request.get(serverURL)
    .then(res => res.body)
}

export function createNewImg(data:Img.ImgSearchData): Promise<Img.ImgSearch>{
  console.log(data)
  return request
  .post('/api/v1/images')
  .send(data)
  .then(res => res.body)
}

export function delImg(id:number){
  return request.delete(`${serverURL}/${id}`)
  .then((res) => {return res.body})
}
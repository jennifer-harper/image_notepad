import request from 'superagent'
import {
  Welcome,
} from '../models/character'

const serverURL = 'http://localhost:3000/api/v1'


// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}

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



export function defineUnsplash(query: string){

  const randomPageNumber = Math.floor(Math.random() * 100) + 1

  return request
  .get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&page=${randomPageNumber}&per_page=12&orientation=landscape&query=${query}`)
  .then((res) => {
    console.log(res.body)
    return res.body
  })
  .catch((err) => {
    console.log('Err message: ' + err)
  })
}


// Link: <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"
// X-Ratelimit-Limit: 1000
// X-Ratelimit-Remaining: 999
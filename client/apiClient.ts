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

// export function searchUnsplash(){
//   return request

//   .get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&page=1&per_page=6&color=red&orientation=landscape&query={}`)
//   .then((res) => {
//     console.log(res.body)
//     return res.body
//   })
//   .catch((err) => {
//     console.log('Err message: ' + err)
//   })
// }




export function defineUnsplash(query: string){
  return request
  .get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&page=1&per_page=6&orientation=landscape&query=${query}`)
  .then((res) => {
    console.log(res.body)
    return res.body
  })
  .catch((err) => {
    console.log('Err message: ' + err)
  })
}
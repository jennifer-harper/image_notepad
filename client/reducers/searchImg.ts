import * as Img from '../../models/character'
import {Action} from '../actions/searchImg'

function reducer (state = [] as Img.ImgSearch[], action: Action) {
    const { type, payload } = action
  
    switch (type) {
      case 'SAVE_ALL_IMGS':
        return payload
      case 'ADD_ONE_IMG':
        return [...state, payload]
      default:
        return state
    }
  }
  
  export default reducer
import { ThunkAction } from "../store"
import * as Img from '../../models/character'
import {getAllImgs, createImg } from '../api'

export type Action =
  | { type: 'SAVE_ALL_IMGS', payload: Img.ImgSearch[] }
  | { type: 'ADD_ONE_IMG', payload: Img.ImgSearch }

  export function saveImgs(users: Img.ImgSearch[]): Action {
    return {
      type: 'SAVE_ALL_IMGS',
      payload: users,
    }
  }

  export function saveOneImg(user:Img.ImgSearch): Action {
    return {
      type: 'ADD_ONE_IMG',
      payload: user,
    }
  }

  export function getAllImages(): ThunkAction {
    return (dispatch) => {
        getAllImgs()
        .then(users => dispatch(saveImgs(users)))
        .catch(err => console.log(err.message))
    }
  }

  export function addImgToDB(user:Img.ImgSearchData): ThunkAction {
    return (dispatch) => {
        createImg(user)
        .then(user => dispatch(saveOneImg(user)))
        .catch(err => console.log(err.message))
    }
  }
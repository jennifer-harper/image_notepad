import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
import {Unsplash} from './Unsplash'
import {Define} from './Define'

import { useEffect } from "react"
import { useAppDispatch } from "../hooks"
import {getAllImages} from "../actions/searchImg"
import UploadToDb from "./UploadToDb"

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllImages())
  }, [dispatch])


  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Unsplash />} />
      <Route path='/search' element={<Define />} />
      <Route path='/db' element={<UploadToDb />} />
    </Routes>
  </>
  )
}

export default App

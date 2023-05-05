import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
import {Unsplash} from './Unsplash'
import {Define} from './Define'


import UploadToDb from "./UploadToDb"

function App() {
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

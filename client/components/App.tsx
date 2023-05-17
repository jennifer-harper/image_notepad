import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
// import {Unsplash} from './Unsplash'
import {Define} from './Define'
import UploadToDb from "./UploadToDb"
import { AllCombined } from './AllCombined'
import { AllImgs } from './AllImgs'

function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<AllCombined />} />
      <Route path='/search' element={<Define />} />
      <Route path='/db' element={<UploadToDb />} />
      <Route path='/all' element={<AllImgs />} />
    </Routes>
  </>
  )
}

export default App

import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
import {Define} from './Define'
import UploadToDb from "./UploadToDb"
import { AllCombined } from './AllCombined'
import {EditUpload } from './EditUpload'

function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<AllCombined />} />
      <Route path='/search' element={<Define />} />
      <Route path='/db' element={<UploadToDb />} />
      <Route path='/upload/:id' element={<EditUpload />} />
    </Routes>
  </>
  )
}

export default App

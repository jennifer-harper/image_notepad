import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
import {SearchSaveImg} from './SearchSaveImg'
import UploadToDb from "./UploadToDb"
import { AllCombined } from './AllCombined'
import {EditUpload } from './EditUpload'
import {EditImg} from './EditImg'

function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<AllCombined />} />
      <Route path='/search' element={<SearchSaveImg />} />
      <Route path='/db' element={<UploadToDb />} />
      <Route path='/upload/:id' element={<EditUpload />} />
      <Route path='/img/:id' element={<EditImg />} />
    </Routes>
  </>
  )
}

export default App

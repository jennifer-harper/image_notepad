import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
import {SearchSaveImg} from './SearchSaveImg'
import UploadToDb from "./UploadToDb"
import { AllCombined } from './AllCombined'
import {EditUpload } from './EditUpload'
import {EditImg} from './EditImg'
import {Login} from './Login'




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
      <Route path='/login' element={<Login />} />
    </Routes>
  </>
  )
}

export default App

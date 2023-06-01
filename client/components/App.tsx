import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
import UploadToDb from "./UploadToDb"
import {EditUpload } from './EditUpload'





function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/db' element={<UploadToDb />} />
      <Route path='/upload/:id' element={<EditUpload />} />
    </Routes>
  </>
  )
}

export default App

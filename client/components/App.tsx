import {Routes, Route} from 'react-router-dom'
import {Nav} from './Nav'
import {Unsplash} from './Unsplash'
import {Define} from './Define'

function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Unsplash />} />
      <Route path='/search' element={<Define />} />
    </Routes>
  </>
  )
}

export default App

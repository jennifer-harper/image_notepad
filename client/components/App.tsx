import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

import { getWelcome } from '../apiClient'
import {Nav} from './Nav'
import {Unsplash} from './Unsplash'
import {Define} from './Define'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return(
    <>
    <Nav/>
    <h1>{welcomeStatement}</h1>
    <Routes>
      <Route path='/' element={<Unsplash />} />
      <Route path='/define' element={<Define />} />
    </Routes>
  </>
  )
}

export default App

import Notes from "./Notes"
import UploadToDb from "./UploadToDb"
import Home from "./Home"
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { getUploads } from '../apis/uploadImgs'
import { useState, useEffect, useCallback } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import * as Img from '../../models/uploads'

function Notebook() {
  const [graphic, setGraphic] = useState([] as Img.UploadUser[])
  const { isLoading } = useAuth0()
  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }
  const {user, logout} = useAuth0() 
  const handleSignOut = () => {
    logout()
  }


  const fetchUploads = useCallback(async () => {
    try {
      const data = await getUploads()
      setGraphic(data.reverse())
    } catch (err) {
      alert((err as Error).message)
    }
  }, [])

  const refreshList = useCallback(() => {
    fetchUploads()
  }, [fetchUploads])

  useEffect(() => {
    if (!isLoading) {
      fetchUploads()
    }
  }, [isLoading, fetchUploads])

  return (
    <>
      <IfAuthenticated>
        <header>
          <div> 
            <div>
              <a href='/'>
                <svg x="0px" y="0px" 	 viewBox="0 0 100 100" >
                  <circle cx="50" cy="50" r="47.5"/>
                </svg>
              </a>
            </div> 
            <nav>
            {user && <p>Signed in as: {user?.nickname}</p>}    
            <button onClick={handleSignOut}>Sign out</button> 
            <button className='add-new' onClick={toggleEditMode}>{editMode ? 'Close' : 'Add new'}</button>
            </nav>
          </div>     
        </header>
        <section className="wrapper">
          <div className={`modal-edit ${editMode ? 'yes' : 'no'}`}>
            {editMode && (
              <UploadToDb refreshList={refreshList} toggleEditMode={toggleEditMode} />
            )}
          </div>
          <Notes graphic={graphic} refreshList={refreshList} />
        </section>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <Home />
      </IfNotAuthenticated>
    </>
  )
}

export default Notebook

import Notes from "./Notes"
import Home from "./Home"
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { getUploads } from '../apis/uploadImgs'
import { useState, useEffect, useCallback } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import * as Img from '../../models/uploads'
import NavModal from "./NavModal"


function Notebook() {
  const [graphic, setGraphic] = useState([] as Img.UploadUser[])
  const { isLoading } = useAuth0()
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
      <IfNotAuthenticated>
        <Home />
      </IfNotAuthenticated>

      <IfAuthenticated>        
        <NavModal refreshList={refreshList}/>
        <Notes graphic={graphic} refreshList={refreshList} />
      </IfAuthenticated>
    </>
  )
}

export default Notebook

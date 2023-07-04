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
        <UploadToDb refreshList={refreshList} />
        <Notes graphic={graphic} refreshList={refreshList} />
      </IfAuthenticated>

      <IfNotAuthenticated>
        <Home />
      </IfNotAuthenticated>
    </>
  )
}

export default Notebook

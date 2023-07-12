import { useAuth0 } from '@auth0/auth0-react'
import UploadToDb from "./UploadToDb"
import { useState } from "react"

type Props= {
    refreshList: () => void
}

function NavModal({ refreshList}: Props){
    const {user, logout} = useAuth0() 
    const handleSignOut = () => {logout()}
    const [editMode, setEditMode] = useState(false)
    const toggleEditMode = () => {setEditMode(!editMode)}

    return(
        <>
        <header>
          <div> 
          <div className='logo'>            
                <svg x="0px" y="0px" 	 viewBox="0 0 100 100" >
                  <circle cx="50" cy="50" r="47.5"/>
                </svg>             
            </div> 
            <nav>
                {user && <p>Signed in as: {user?.nickname}</p>} 
                <div>  
                  <button onClick={handleSignOut}>Sign out</button> 
                  <button className='add-new' onClick={toggleEditMode}>{editMode ? 'Close' : 'Add new'}</button>
                </div> 
            </nav>
          </div>     
        </header>
        <div className={`modal-edit ${editMode ? 'yes' : 'no'}`}>
          {editMode && (
            <UploadToDb refreshList={refreshList} toggleEditMode={toggleEditMode} />
          )}
        </div>  
        </>
    )
}

export default NavModal
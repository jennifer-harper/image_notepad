import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'

function Nav() {
  const {user, logout, loginWithRedirect } = useAuth0() 
  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
  <>
    <IfAuthenticated>
      <button onClick={handleSignOut}>Sign out</button>
      {user && <p>Signed in as: {user?.nickname}</p>}
      <nav className='nav'>
      <Link to='/'><p>Home</p></Link>
      <Link to='/db'><p>Upload Images</p></Link>
    </nav>
    </IfAuthenticated>
    <IfNotAuthenticated>
      <button onClick={handleSignIn}>Sign in</button>
    </IfNotAuthenticated>

  </>
  )
}

export default Nav

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const {user, logout} = useAuth0() 
  const handleSignOut = () => {
    logout()
  }

  return (
  <>
    <IfAuthenticated>
      <button onClick={handleSignOut}>Sign out</button>
      {user && <p>Signed in as: {user?.nickname}</p>}
    </IfAuthenticated>
    </>
  )
}

export default Nav

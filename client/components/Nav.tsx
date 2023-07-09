import { IfAuthenticated} from './Authenticated'
import { useAuth0 } from "@auth0/auth0-react";


function Nav() {
  const {user, logout} = useAuth0() 
  const handleSignOut = () => {
    logout()
  }

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
          </nav>
        </div>     
      </header>
    </IfAuthenticated>
    </>
  )
}

export default Nav

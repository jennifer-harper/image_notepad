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
              {/* <svg  x="0px" y="0px" viewBox="0 0 102 102">
              <path d="M51,0.9C23.4,0.9,1,23.5,1,51.1s22.4,50,50,50s50-22.4,50-50S78.6,0.9,51,0.9z M44.7,26.6h12.5v36.2H44.7V26.6z M28,26.6
              h12.5v8.8H28C28,35.4,28,26.6,28,26.6z M40.5,63.9c0,3.8-0.8,6.5-2.3,8.4c-1.7,2.1-4.6,3.1-8.4,3.1H28V39.2h12.5L40.5,63.9
              L40.5,63.9z M74,75.6H44.7V67H74V75.6z M74,63H61.2V39.2h2.1c5.6,0,9,1.9,10.2,5.9c0.4,1.3,0.6,2.7,0.6,4.4V63H74z"/>
              </svg> */}
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

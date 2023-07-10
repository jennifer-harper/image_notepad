import { IfAuthenticated, IfNotAuthenticated} from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Nav(){
    const {user, logout} = useAuth0() 
    const handleSignOut = () => {
        logout()
    }
    const {loginWithRedirect } = useAuth0();

    const handleSignIn = () => {
      loginWithRedirect()
    }

    return(
        <header>
            <div> 
                <div>              
                    <svg x="0px" y="0px" 	 viewBox="0 0 100 100" >
                    <circle cx="50" cy="50" r="47.5"/>
                    </svg>             
                </div> 
                <nav>
                <IfAuthenticated>
                    {user && <p>Signed in as: {user?.nickname}</p>}    
                    <button onClick={handleSignOut}>Sign out</button> 
                    <Link to='/'><button className='add-new'>Home</button></Link>
                </IfAuthenticated>
                <IfNotAuthenticated>
                    <button className='signup' onClick={handleSignIn}>Sign Up Today</button>
                </IfNotAuthenticated>                
                </nav>
            </div>     
        </header>
    )
}

export default Nav

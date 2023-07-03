import { useAuth0 } from '@auth0/auth0-react';

export function Home() {
  const {loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect()
  }


  return (
    <div className='home-wrapper'>
      <div className="content">
        <h1>Need a great online notepad?</h1>
        <p>Add images and record your thoughts. Its free to sign up, private and easy to use.</p>
        <div>
          <button className='signup' onClick={handleSignIn}>Sign Up Today</button>
        </div>
        
      </div>
      <div className='visual'>

      </div>
    </div>
  );
}



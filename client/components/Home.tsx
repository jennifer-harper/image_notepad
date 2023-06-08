import { useAuth0 } from '@auth0/auth0-react';

export function Home() {
  const {loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect()
  }


  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Please sign in to continue.</p>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}



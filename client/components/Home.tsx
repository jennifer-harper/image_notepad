import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function HomePage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/db'
    }
  }, [isAuthenticated]);

  const handleSignIn = () => {
    loginWithRedirect({
      appState: { targetUrl: '/db' },
    });
  };

  if (isAuthenticated) {
    return null
  }

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Please sign in to continue.</p>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default HomePage;

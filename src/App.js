import { useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Hub } from '@aws-amplify/core'; // Import Hub from @aws-amplify/core
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  useEffect(() => {
    const handleAuthStateChange = (state) => {
      if (state === 'signedin') {
        window.location.href = 'https://trafyai.com/';
      }
    };

    Hub.listen('auth', handleAuthStateChange);

    return () => {
      // Clean up the listener when the component unmounts
      Hub.remove('auth', handleAuthStateChange);
    };
  }, []);

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

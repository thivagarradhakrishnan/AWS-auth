import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

// Define the callback function triggered on authentication UI state change
const handleAuthUIStateChange = (authState, authData) => {
  if (authState === 'signIn' || authState === 'signUp') {
    window.location.href = 'https://trafyai.com/';
  }
};

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App, { onAuthUIStateChange: handleAuthUIStateChange });

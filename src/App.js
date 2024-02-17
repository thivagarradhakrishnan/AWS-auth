import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config); // Configure Amplify

function App(signOut,user) {
  useEffect(() => {
    async function redirectToExternalUrl() {
      const user = await Amplify.Auth.currentAuthenticatedUser(); // Access Auth from Amplify directly
      if (user) {
        window.location.href = 'http://trafyai.com/';
      }
    }
    redirectToExternalUrl();
  }, []);

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

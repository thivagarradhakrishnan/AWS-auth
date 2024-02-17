import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config); // Configure Amplify

function App() {
  useEffect(() => {
    async function redirectToExternalUrl() {
      const user = await Amplify.Auth.currentAuthenticatedUser(); 
      if (user) {
        window.location.href = 'https://trafyai.com/';
      }
    }
    redirectToExternalUrl();
  }, []);

  // This useEffect will listen to changes in the AuthState to redirect after sign-in
  useEffect(() => {
    const listener = (authState) => {
      if (authState === 'signedIn') {
        window.location.href = 'https://trafyai.com/';
      }
    };
    const unsubscribe = Amplify.Hub.listen('auth', listener);
    return () => unsubscribe();
  }, []);

  return null; // Renders nothing
}

export default withAuthenticator(App);

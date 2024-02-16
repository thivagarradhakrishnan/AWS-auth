import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config); // Configure Amplify

function Redirect() {
  useEffect(() => {
    async function redirectToExternalUrl() {
      const user = await Amplify.Auth.currentAuthenticatedUser(); // Access Auth from Amplify directly
      if (user) {
        window.location.href = 'http://trafyai.com/';
      }
    }
    redirectToExternalUrl();
  }, []);

  return null; // Renders nothing
}

export default withAuthenticator(Redirect);

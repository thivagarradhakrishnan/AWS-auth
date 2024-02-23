import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

// Function to redirect to https://trafyai.com/
const redirectToExternalSite = () => {
  window.location.href = 'https://trafyai.com/';
};

// Wrap the App component with withAuthenticator
export default withAuthenticator(() => null, { onAuthUIStateChange: (authState) => {
  if (authState === 'signedIn') {
    redirectToExternalSite();
  }
}});

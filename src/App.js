import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

function App({ signOut, user }) {
  const redirectToExternalSite = () => {
    window.location.href = 'https://trafyai.com/';
  };

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={redirectToExternalSite}>Go to Trafyai</button>
    </>
  );
}

export default withAuthenticator(App);

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import React, {useEffect} from 'react';
Amplify.configure(config);

function App({ signOut, user }) {
  // Function to redirect to https://trafyai.com/
  const redirectToExternalSite = () => {
    window.location.href = 'https://trafyai.com/';
  };
   useEffect(()=>{
    redirectToExternalSite();
   },[]);
  return (
    <>
      {/* <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={redirectToExternalSite}>Go to Trafyai</button> */}
    </>
  );
}

export default withAuthenticator(App);

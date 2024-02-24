import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import React, {useEffect} from 'react';
Amplify.configure(config);

const formFields = {
  signUp: {
    email: {
      order: 1
    },
    family_name: {
      order: 2
    },
    preferred_username: {
      order: 3
    },
    birthdate: {
      order: 4
    },
    password: {
      order: 5
    },
    confirm_password: {
      order: 6
    }
    }
  }

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

export default withAuthenticator(App, {
  signUpConfig: {
    signUpFields: formFields.signUp
  }
});

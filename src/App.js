import { Amplify, Auth } from 'aws-amplify';
import { useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

function App() {
  useEffect(() => {
    const checkUser = async () => {
      try {
        // Check if the user is already signed in
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          // If user is signed in, redirect to 'https://trafyai.com/'
          window.location.href = 'https://trafyai.com/';
        }
      } catch (error) {
        console.log('User not signed in');
      }
    };

    checkUser();
  }, []);

  return null; // No need to render anything in this component
}

export default App;

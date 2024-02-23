import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifyAuthenticator } from '@aws-amplify/ui-react'; // Importing AmplifyAuthenticator
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

const MyCustomAuthenticator = withAuthenticator(props => {
  const signOut = async () => {
    await Amplify.Auth.signOut(); // Adjusting the usage of Amplify.Auth
    window.location.href = '/'; // Redirect to home page after signing out
  };

  const redirectToExternalUrl = (url) => {
    window.location.href = url; // Redirect to external URL
  };

  const handleSignIn = () => {
    // Redirect to traffyai.com after signing in
    redirectToExternalUrl('https://trafyai.com');
  };

  const handleSignUp = () => {
    // Redirect to traffyai.com after creating an account
    redirectToExternalUrl('https://trafyai.com');
  };

  return (
    <>
      <h1>Hello {props.user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
});

export default MyCustomAuthenticator;

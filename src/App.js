import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; // Import BrowserRouter, Route, Redirect
import config from './amplifyconfiguration.json';

Amplify.configure(config);

// Define a new component for the redirect
const RedirectComponent = () => {
  window.location.href = 'https://trafyai.com/';
  return null; // Render nothing since we are redirecting
};

function App({ signOut, user }) {
  return (
    <Router> {/* Wrap your component with Router */}
      <Route path="/redirect" component={RedirectComponent} /> {/* Define a route for the redirection */}
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        <button onClick={() => {window.location.href = '/redirect'}}>Go to Trafyai</button> {/* Redirect button */}
      </>
    </Router>
  );
}

export default withAuthenticator(App);

import React from 'react'; // Import React from 'react' package
import './LoginForm.css'; // import from 'LoginFor.css'

function LoginForm() { // Define function component 'LoginForm'
  return ( // Return JSX element with CSS className for styling purposes
    <div className="login-form">
      <h3 className="login-heading">Log In</h3>
      <div className="form-group">
        <input type="text" placeholder="Username" className="form-control" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" className="form-control" />
      </div>
    </div>
  );
}

// Export LoginForm to be accessed by other files
export default LoginForm;

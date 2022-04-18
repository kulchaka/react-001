import React from 'react';
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="login-container">
      <nav className="login">
        <h2>Login in to GitHub</h2>
        <p>Enter Username or email address and password from your GitHub acc</p>
        <button onClick={() => props.authenticate()} className="github">Login</button>
      </nav>
    </div>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
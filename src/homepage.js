import "./App.css";
import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrap">
        <h2>Login to Healthsys</h2>
        <form>
          <label htmlFor="login">Username:</label>
          <input type="text" name="login" spellCheck="false"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" min="6" max="15"></input>
          <button type="submit" id="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


export default Login;
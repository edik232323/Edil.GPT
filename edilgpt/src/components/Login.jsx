import React, { useState } from 'react';
import '../styles/loginStyle.scss'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div id="LoginForm">
      <img src="../src/assets/EdilLogo.png" alt="EDILGPTLOGO.png"width={200} height={200}/>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required placeholder='Username'
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required placeholder='Password'
          />
        <button type="submit">Login</button>
      </form>
      <p>No Account ?
        <a href='../src/pages/SignUpPage.jsx'>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;


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
    <div id="registr_page">
      <img id='edil_logo' src="../src/assets/EdilLogo.png" alt="EDILGPTLOGO.png"width={200} height={200}/>
      <form id='registr_form' onSubmit={handleSubmit}>
          <input className='login_inputs'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required placeholder='Username'
          />
          <input className='login_inputs'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required placeholder='Password'
          />
        <button id='registr_button' type="submit">Login</button>
      </form>
      <p id='registr_change'>No Account ?
        <a id='registr_change_link' href='SignUp'>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;


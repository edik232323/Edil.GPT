import React, { useState } from 'react';
import '../styles/loginStyle.scss';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div id="registr_page">
      <img id='edil_logo' src="../src/assets/EdilLogo.png" alt="EDILGPTLOGO.png" width={200} height={200} />
      <form id='registr_form' onSubmit={handleSubmit}>
        <input className='login_inputs'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder='Username'
        />
        <input className='login_inputs'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
        />
        <input className='login_inputs'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder='Confirm Password'
        />

        {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}

        <button id='registr_button' type="submit">Sign Up</button>
      </form>
      <p id='registr_change'>Already have an account?
        <a id='registr_change_link' href='Login'>
          Log in
        </a>
      </p>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import '../styles/loginStyle.scss';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password === confirmPassword) {
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      // Proceed with login logic
    } else {
      // Passwords do not match, handle the error
      setPasswordsMatch(false);
    }
  };

  return (
    <div id="LoginForm">
      <img src="../src/assets/EdilLogo.png" alt="EDILGPTLOGO.png" width={200} height={200} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder='Username'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder='Confirm Password'
        />

        {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}

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

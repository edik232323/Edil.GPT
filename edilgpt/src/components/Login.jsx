import React, { useState, useContext } from 'react';
import '../styles/loginStyle.scss'
import {AuthContext, UserContext} from "../App.jsx";
import axiosClient from "../app/Api.js"

const LoginForm = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext)
    const [user, setUser] = useContext(UserContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axiosClient.post('/api/v1/login/', {
            username: username,
            password: password
        });

        if (response?.data?.access)
            localStorage.setItem('access_token', response.data.access);

        if (response?.data?.refresh)
            localStorage.setItem('refresh_token', response.data.refresh);

        setIsAuth(true)

    } catch (e) {
        console.log(e)
    }
  };

  return (
    <div id="registr_page">
      <img id='edil_logo' src="../src/assets/EdilGPTLogo1.png" alt="EDILGPTLOGO.png"width={200} height={200}/>
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


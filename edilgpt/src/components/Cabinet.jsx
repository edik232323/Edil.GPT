import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CabinetStyle.scss'
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { UserContext } from '../App';

const Cabinet = () => {
    let navigate = useNavigate()
    const [user, setUser] = useContext(UserContext);
    
  return (
    <div id='cabinet_container'>
      <div id='profile_out'>
        <img id='profile_picture' src="../src/assets/user-placeholder.png" alt="user.png" width={120} height={120}/>
        <p id='profile_name'>{user.username}</p>
        <button id='log_out_button' onClick={()=>navigate('/signup')}><Icon id='log_out_icon' icon="ic:sharp-log-out" /></button>
      </div>
      <div id='data_container'>
        <div id='info_container'>
            <h2 id='info_header'>Account Information</h2>
            <ul className='info_list'>
                <li className='info_element' placeholder='First Name'>{user.firstname}</li>
                <li className='info_element' placeholder='Second Name'>{user.secondname}</li>
                <li className='info_element' placeholder='Date of Birth'>Date of Birth</li>
            </ul>
            <ul className='info_list'>
              <li className='info_element' placeholder='Username'>Username</li>
              <li className='info_element' placeholder='Email'>my@email.com</li>
            </ul>
            <button id='edit_button' onClick={()=>navigate('/edit')}>
              edit account information
              <Icon icon="ep:edit" />
            </button>
            <div id="statistics_container">
              <h2 id='statistics_header'>Statistics</h2>
            </div>
        </div>
      </div>
      <div id="customize_container">
        <a id='customize_button' href='/customize'>
          CUSTOMIZE
          <Icon icon="material-symbols-light:star-outline" />
        </a>
      </div>
    </div>
  )
}

export default Cabinet

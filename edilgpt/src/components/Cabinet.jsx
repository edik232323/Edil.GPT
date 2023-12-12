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
        <Icon icon="ph:user"id='profile_picture' width={120} height={120}/>
        <p id='profile_name'>{user.username}</p>
        <button id='log_out_button' onClick={()=>navigate('/signup')}><p id='log_out_text'>LOG OUT</p><Icon id='log_out_icon' icon="ic:sharp-log-out" /></button>
      </div>
      <div id='main_container'>
        <div id='info_container'>
            <h2 id='info_header'>Account Information</h2>
            <ul className='info_list'>
                <li className='info_element' placeholder='First Name'>{user.firstname}</li>
                <li className='info_element' placeholder='Second Name'>{user.secondname}</li>
            </ul>
            <ul className='info_list'>
              <li className='info_element' placeholder='Date of Birth'>{user.birthday}</li>
              <li className='info_element' placeholder='Email'>{user.email}</li>
            </ul>
            <button id='edit_button' onClick={()=>navigate('/edit')}>
              <p id='edit_button_text'>edit account information</p>
              <Icon icon="ep:edit" />
            </button>
              <h2 id='statistics_header'>Statistics</h2>
              <div id="statistics_container">
                <div className="statistics_box">
                  <h3 className='statistic_header'>Activity in the last five monthes</h3>
                  <img className='statistic_png' src="../src/assets/Statistics-1.png" alt="" />
                </div>
                <div className="statistics_box">
                  <h3 className='statistic_header'>Activity in the last seven days</h3>
                  <img className='statistic_png' src="../src/assets/Statistics-2.png" alt="" />
                </div>
              </div>
        </div>
      </div>
      <div id="customize_container">
        <a id='customize_button' href='/customize'>
          CUSTOMIZE
          <Icon icon="material-symbols-light:star-outline" height={16} />
        </a>
        <div id='customize_hover'></div>
      </div>
    </div>
  )
}

export default Cabinet

import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CabinetStyle.scss'
import { Icon } from '@iconify/react';

const Cabinet = () => {
    let navigate = useNavigate()
  return (
    <div id='cabinet_container'>
      <div id='profile_out'>
        <img id='profile_picture' src="../src/assets/user-placeholder.png" alt="user.png" width={120} height={120}/>
        <p id='profile_name'>Username</p>
        <button id='log_out_button' onClick={()=>navigate('/signup')}><Icon id='log_out_icon' icon="ic:sharp-log-out" /></button>
      </div>
      <div id='info_container'>
        <div id='data_container'>
            <h1 id='info_header'>Account Information</h1>
            <ul id='info_list'>
                <li className='info_element' placeholder='First Name'>First Name</li>
                <li className='info_element' placeholder='Second Name'>Second Name</li>
                <li className='info_element' placeholder='Username'>Username</li>
                <li className='info_element' placeholder='Date of Birth'>Date of Birth</li>
            </ul>
            <button onClick={()=>navigate('/edit')}></button>
        </div>
      </div>
    </div>
  )
}

export default Cabinet

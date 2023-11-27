import React from 'react'
import '../styles/Namestyle.scss'
import logo from '../assets/edilgptlogo.png'
const Name = () => {
  return (
    <div id='name_container'>
      <p id='name_text'>EdilGPT</p>
      <img id='name_img' src={logo} alt="" width={136.725} height={26}/>
      <div id='name_transition'></div>
    </div>
  )
}

export default Name

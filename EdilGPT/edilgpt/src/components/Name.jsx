import React from 'react'
import '../styles/Namestyle.scss'
import logo from '../assets/edilgptlogo.png'
const Name = () => {
  return (
    <div className='one'>
      <p>EdilGPT</p>
      <img src={logo} alt="" width={136.725} height={26}/>
    </div>
  )
}

export default Name

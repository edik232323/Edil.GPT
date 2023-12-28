import '../styles/UnauthorizedStyle.scss'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Unauthorized = () => {
    let navigate = useNavigate()
  return (
    <div id='unauthorized'>
        <h1>You're Logged Out</h1>
        <Icon icon="et:sad" width="320" height="320" />
        <div id="authorize">
            <button onClick={navigate('/signup')}>Sign Up</button>
            <button onClick={navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Unauthorized

import { useNavigate } from 'react-router-dom'
import '../styles/ChatsStyle.scss'
import {Icon} from '@iconify/react'


const Chats = () => {
  let navigate = useNavigate()
  return (
    <div id='chat_container'>
      <div id="new_chat_container">
        <button id='new_chat_button'>
            <img src="../src/assets/EdilGPTLogo1.png" alt="EdilGptLogo.svg" width={50} height={50}/>
            <div id='new_chat_space'>
                <p id='new_chat_text'>New Chat</p>
                <Icon id='new_chat_icon' icon="simple-line-icons:note"/>
            </div>
        </button>
      </div>
      <div id='chats_container'>
        <div id='existing_chats_container'></div>
        <div id='personal_cabinet_container' onClick={()=>navigate('/cabinet')}> PERSONAL CABINET</div>
      </div>
      
    </div>
  )
}

export default Chats

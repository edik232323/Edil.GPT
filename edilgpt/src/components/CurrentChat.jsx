import '../styles/CurrentChatStyle.scss'
import { useState } from 'react';
import { Icon } from '@iconify/react';

const CurrentChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }
  const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setNewMessage('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div id="current_chat_wrapper">
      <div id="chat_window">
        <div id="message-list">
            {messages.map((message, index) => (<div key={index} className={`message ${message.sender}`}>{message.text}</div> ))}
        </div>
        <div id="input_window">
          <textarea id='message_input' rows={1} cols={8} type="text" placeholder="Type your message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={handleKeyPress}/>
          <button id='input_button' onClick={handleSendMessage}><Icon id='send_icon' icon="lets-icons:send-hor-fill" color="white" width="50" height="50" /></button>
        </div>
      </div>
    </div>
  )
}
export default CurrentChat
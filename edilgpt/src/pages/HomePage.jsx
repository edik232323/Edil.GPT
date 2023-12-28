import Name from '../components/Name'
import Chats from '../components/Chats'
import Unauthorized from '../components/Unauthorized.jsx'
import CurrentChat from '../components/CurrentChat.jsx'
import '../styles/HomePageStyle.scss'
import {AuthContext} from "../App.jsx"
import {useContext} from "react"

const HomePage = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext)
  return (
    <div id='home_page'>
      {isAuth ? <Name/> :<Unauthorized/>}
      {isAuth ? <Chats/> : ''}
      {isAuth ? <CurrentChat/> :''}
    </div>
  )
}

export default HomePage

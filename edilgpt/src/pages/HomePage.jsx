import Name from '../components/Name'
import Chats from '../components/Chats'
import '../styles/HomePageStyle.scss'
import {AuthContext} from "../App.jsx"
import {useContext} from "react"

const HomePage = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext)
  return (
    <div id='home_page'>
      <Name/>
        {isAuth ? <Chats/> : 'Ты Эдиль'}
    </div>
  )
}

export default HomePage

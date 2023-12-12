import './App.scss'
import HomePage from '../src/pages/HomePage'
import LoginPage from '../src/pages/LoginPage'
import SignUpPage from '../src/pages/SignUpPage'
import MainRoutes from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
// import Routes from '../src/routes/routes'
import { useState, createContext } from 'react'

export const UserContext = createContext('user');

function App() {
  const [user, setUser] = useState({
    username: 'G-DOC69',
    firstname: 'Erlan',
    secondname: 'Turarov',
    birthday:'30/03/05',
    email:'erlan.turar.5@gmail.com',
  })

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={[user, setUser]}>
          <MainRoutes/>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App

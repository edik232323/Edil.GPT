import './App.scss'
import HomePage from '../src/pages/HomePage'
import LoginPage from '../src/pages/LoginPage'
import SignUpPage from '../src/pages/SignUpPage'
import MainRoutes from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
// import Routes from '../src/routes/routes'

function App() {
  return (
    <>
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App

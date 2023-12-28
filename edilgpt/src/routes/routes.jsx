import HomePage from '../pages/HomePage'
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import CabinetPage from '../pages/CabinetPage'
import {Routes,Route} from 'react-router-dom'
const MainRoutes = () => {
    const PUBLIC_ROUTES=[
        {
            element:<HomePage/>,
            path:'/',
            id:1,
        },
        {
            element:<LoginPage/>,
            path:'/login',
            id:2,
        },{
            element:<SignUpPage/>,
            path:'/signup',
            id:3,
        },{
            element:<CabinetPage/>,
            path:'/cabinet',
            id:4,
        },
    ]
  return(
    <Routes>
      {PUBLIC_ROUTES.map(item=>(<Route path={item.path} element={item.element} key={item.id}/>))}
    </Routes>)
}
export default MainRoutes;
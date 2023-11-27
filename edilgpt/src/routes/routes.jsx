import HomePage from "../../edilgpt/src/pages/HomePage"
import LoginPage from "../../edilgpt/src/pages/LoginPage"
import SignUpPage from "../../edilgpt/src/pages/SignUpPage"
import ErrorPage from "../../edilgpt/src/pages/ErrorPage"
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
            element:<ErrorPage/>,
            path:'/error',
            id:4,
        },
    ]
  return(
    <Routes>
      {PUBLIC_ROUTES.map(item=>(<Route path={item.path} element={item.element} key={item.id}/>))}
    </Routes>)
}
export default MainRoutes;
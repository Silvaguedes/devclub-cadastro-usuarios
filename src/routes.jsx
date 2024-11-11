
import {createBrowserRouter}  from 'react-router-dom'

import Home from '../pages/Home'

import ListUsers from '../pages/Home/ListUsers/Index.jsx'

const router = createBrowserRouter([
    
    
    {
        path: '/',
       element: <Home />
        
    },


{
    
    path: '/lista-de-usuários',
    element: <ListUsers />
}




])

export default router
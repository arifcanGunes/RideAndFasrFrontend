import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FirstPage from './pages/ui/FirstPage'
import ErrorPage from './pages/common/ErrorPage'
import Login from './pages/ui/Login'
import AdminLogin from './pages/admin/AdminLogin'
import SignUp from './pages/ui/SignUp'


const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/ui/login',
    element: <Login/>
  },
  {
    path: 'signUp',
    element: <SignUp/>
  },
  {
    path: '/admn/login',
    element: <AdminLogin/>
  },

])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>  
  </RouterProvider>
)

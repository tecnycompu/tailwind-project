import { useRoutes , BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import Asian from '../Asian'
import Colombian from '../Colombian'
import FastFood from '../FastFood'
import Sea from '../Sea'

import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Asian', element: <Asian /> },
    { path: '/FastFood', element: <FastFood /> },
    { path: '/Sea', element: <Sea /> },
    { path: '/Colombian', element: <Colombian /> },

  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}
export default App

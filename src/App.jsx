import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Resume from './pages/Resume'
import ResumeBuilder from './pages/ResumeBuilder'
import { PrivateRoute } from '../src/utils/PrivateRoute'

import Navigation from "./components/Navigation";

import { useLocation  } from "react-router-dom"

function App() {

  const location  = useLocation()

  return (
    <>
    {location.pathname === '/' || location.pathname ==='/register' ? '' : <Navigation />}
    <ToastContainer />
    
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/resume-builder' element={
        <PrivateRoute>
          <ResumeBuilder />
        </PrivateRoute>
      }/>
      <Route path='/resume' element={<Resume />}/>
      
    </Routes>
     
      {/* <Login /> */}
      {/* <ProgressSteps /> */}
    </>
  )
}

export default App

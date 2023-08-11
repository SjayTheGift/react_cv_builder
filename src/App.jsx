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


function App() {

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/resume-builder' element={<ResumeBuilder />}/>
      <Route path='/resume' element={<Resume />}/>
      
    </Routes>
     
      {/* <Login /> */}
      {/* <ProgressSteps /> */}
    </>
  )
}

export default App

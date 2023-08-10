import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';

import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Resume from './pages/Resume'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/resume' element={<Resume />}/>
      
    </Routes>
     
      {/* <Login /> */}
      {/* <ProgressSteps /> */}
    </>
  )
}

export default App

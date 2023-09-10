import { useState, useEffect } from "react"
import { useLocation, useNavigate, Navigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'


import { login } from '../features/auth/authActions';
import Spinner from '../components/Spinner';

import login_screen from '../assets/login_screen_img.png'

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [submitted, setSubmitted] = useState(false);
    // const from = location.state?.from?.pathname || "/resume-builder"

    // Get data from state
   const {userToken, isLoading, isError,  isSuccess, message}  = useSelector(
    (state) => state.auth)

    useEffect(() => {
      if (isError) {
          console.log('error loading')
      }
  
      if (isSuccess || userToken) {
          navigate("/resume-builder", {replace: true})

      }

    }, [userToken, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const onSubmit =  (e) => {
        e.preventDefault()
        console.log(formData)
        setSubmitted(true)
      
        if(email.trim() !== '' &&  password.trim() !== ''){
          dispatch(login(formData))
        }

    }

    return (
        <section className="bg-gray-200 min-h-screen flex items-center justify-center" onSubmit={(e) => onSubmit(e)}>
            <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
            <div className="md:w-1/2 px-5">
                <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
                <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
                <form className="mt-6" action="#" method="POST">
                <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        placeholder="Enter Email Address" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                        focus:border-blue-500 focus:bg-white focus:outline-none" 
                        autoFocus required 
                    onChange={(e) => onChange(e)}/>
                </div>
        
                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter Password" 
                    minLength="6" 
                    value={password}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                    focus:border-blue-500 focus:bg-white focus:outline-none" required 
                    onChange={(e) => onChange(e)}/>
                </div>
        
                {/* <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                </div> */}
        
                <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6">
                   {isLoading ? <Spinner />: `Log-In`}
                </button>
                </form>
        
                <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
                <hr className="border-gray-500" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-500" />
                </div>
        
                <div className="text-sm flex justify-between items-center mt-3">
                    <p>If you don't have an account...</p>
                    <Link to='/register' className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Register</Link>
                </div>
            </div>
        
            <div className="w-1/2 md:block hidden ">
                {/* <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl" alt="page img" /> */}
            <img src={login_screen} className='object-contain h-[100%] w-[100%] '/>
            </div>
        
            </div>
      </section>
    )
}
        
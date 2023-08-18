import { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../features/auth/authSlice';

import { register } from '../features/auth/authActions';
import login_screen from '../assets/login_screen_img.png'

export default function Register() {
    
  const [formData, setFormData] = useState({
      email: '',
      password: '',
      password2: '',
  })

  const { email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Get data from redux store
  const {isLoading, isError,  isSuccess, message}  = useSelector(
      (state) => state.auth)


  useEffect(() => {
      if (isError) {
          toast.error(message)
      }

      if (isSuccess) {
          navigate('/')
      }

      dispatch(reset())
  }, [isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
  }



  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2){
        toast.error('Passwords do not match')
    }else{
        // Run the registration function
        dispatch(register(formData))
    }
  }

    return (
        <section className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div className="md:w-1/2 px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">Register</h2>
            <p className="text-sm mt-4 text-[#002D74]">If you don't have an account</p>
            <form className="mt-6" method="POST" onSubmit={e => onSubmit(e)}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Email Address" 
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
                autoFocus required 
                onChange={e => onChange(e)} 
                value={email}/>
              </div>
    
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter Password" 
                minLength="6" 
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                focus:border-blue-500 focus:bg-white focus:outline-none" 
                required 
                onChange={e => onChange(e)} 
                value={password}/>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password Again</label>
                <input 
                type="password" 
                name="password2" 
                id="password2" 
                placeholder="Enter Password Again" 
                minLength="6" 
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" 
                required 
                onChange={e => onChange(e)} 
                value={password2}/>
              </div>
    
    
              <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">Sign Up
              </button>
            </form>
    
            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>
    
            <div className="text-sm flex justify-between items-center mt-3">
              <p>If you have an account, please login.</p>
              <Link to='/' className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Login</Link>
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
        
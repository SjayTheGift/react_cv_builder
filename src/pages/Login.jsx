import { Link } from 'react-router-dom'



export default function Login() {

    return (
        <section className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
            <div className="md:w-1/2 px-5">
                <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
                <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
                <form className="mt-6" action="#" method="POST">
                <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>
        
                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                </div>
        
                {/* <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                </div> */}
        
                <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6">Log In</button>
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
                <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl" alt="page img" />
            </div>
        
            </div>
      </section>
    )
}
        
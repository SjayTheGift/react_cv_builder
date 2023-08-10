import React from 'react'
import ProgressSteps from '../components/ProgressSteps'
import NextAndPrev from '../components/NextAndPrev'

const Resume = () => {
  return (
    <section className="w-full bg-gray-200 min-h-screen py-5">

        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#002D74] mb-4">Create online resume</h2>
        
        <div className="bg-gray-100 p-5 rounded-2xl shadow-lg w-full md:w-[80%] mx-auto my-5">
            <ProgressSteps/>
        </div>
        

        <div className='flex flex-col items-center'>
            <div className="bg-gray-100 p-5 flex justify-center items-center rounded-2xl shadow-lg w-full md:w-[80%]">
                <div className="w-full px-5">
                    <form className="mt-6" action="#" method="POST">
                        <p className='text-1xl md:text-2xl font-bold my-2'>Basic Info</p>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                            <div className='w-full'>
                                <label className="block text-gray-700">First name </label>
                                <input 
                                    type="text" 
                                    name="first_name" 
                                    id="first_name" 
                                    placeholder="Enter First Name" 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                                    focus:border-blue-500 focus:bg-white focus:outline-none" 
                                    autofocus 
                                    autocomplete 
                                    required 
                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-700">Last name </label>
                                <input 
                                    type="text" 
                                    name="last_name" 
                                    id="last_name" 
                                    placeholder="Enter Last Name" 
                                    minlength="6" 
                                    className="w-full px-4 py-3 rounded-lg 
                                    bg-gray-200 mt-2 border focus:border-blue-500
                                        focus:bg-white focus:outline-none" 
                                    required />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                            <div className='w-full'>
                                <label className="block text-gray-700">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Enter Email Address" 
                                    className="w-full px-4 py-3 rounded-lg 
                                    bg-gray-200 mt-2 border focus:border-blue-500 
                                    focus:bg-white focus:outline-none" 
                                    required />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-700">Phone Number</label>
                                <input 
                                type="text" 
                                name="telephone" 
                                id="telephone" 
                                placeholder="Enter Phone Number" 
                                minlength="6" 
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                                focus:border-blue-500 focus:bg-white focus:outline-none" 
                                required />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-700">Job Title</label>
                                <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Enter Your Job Title" 
                                minlength="6" 
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                                focus:border-blue-500 focus:bg-white focus:outline-none" 
                                required />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                            <div className='w-full'>
                                <label className="block text-gray-700">First name </label>
                                <textarea 
                                    type="text" 
                                    name="first_name" 
                                    id="first_name" 
                                    placeholder="Enter First Name" 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                                    focus:border-blue-500 focus:bg-white focus:outline-none" 
                                    autocomplete 
                                    required
                                    cols={3} 
                                    rows={3}
                                ></textarea>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                            <div className='w-full'>
                                <label className="block text-gray-700">Linkedin</label>
                                <input 
                                    type="text" 
                                    name="linkedin" 
                                    id="linkedin" 
                                    placeholder="Please enter link" 
                                    className="w-full px-4 py-3 rounded-lg 
                                    bg-gray-200 mt-2 border focus:border-blue-500 
                                    focus:bg-white focus:outline-none" 
                                    required />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-700">Github</label>
                                <input 
                                type="text" 
                                name="github" 
                                id="github" 
                                placeholder="Please enter link" 
                                minlength="6" 
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                                focus:border-blue-500 focus:bg-white focus:outline-none" 
                                required />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-700">Website</label>
                                <input 
                                type="text" 
                                name="website" 
                                id="website" 
                                placeholder="Please enter link" 
                                minlength="6" 
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                                focus:border-blue-500 focus:bg-white focus:outline-none" 
                                required />
                            </div>
                        </div>
                        

                        {/* <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6">Log In
                        </button> */}
                    </form>
                </div>
            </div>
        </div>

        <div className="bg-gray-100 p-5 flex justify-between rounded-2xl shadow-lg w-full md:w-[80%] mx-auto my-5">
           <NextAndPrev />
        </div>


    </section>
  )
}

export default Resume

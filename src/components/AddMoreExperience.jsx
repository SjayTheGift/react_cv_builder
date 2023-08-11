import React, {useState} from 'react'




const AddMoreExperience = ({ count, setCount, inputFields, setInputFields}) => {


  return (
    <>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                <div className='w-full'>
                    <label className="block text-gray-700">Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        id="position" 
                        placeholder="Enter Job Title" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                        focus:border-blue-500 focus:bg-white focus:outline-none" 
                        autoFocus 
                        required 
                    />
                </div>

                <div className="w-full">
                    <label className="block text-gray-700">Company</label>
                    <input 
                        type="text" 
                        name="company" 
                        id="company" 
                        placeholder="Enter Company Name" 
                        minLength="6" 
                        className="w-full px-4 py-3 rounded-lg 
                        bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" 
                        required />
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                <div className='w-full'>
                    <label className="block text-gray-700">Start Date</label>
                    <input 
                        type="date" 
                        name="position" 
                        id="position" 
                        placeholder="Start Date" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                        focus:border-blue-500 focus:bg-white focus:outline-none" 
                        autoFocus 
                        required 
                    />
                </div>

                <div className="w-full">
                    <label className="block text-gray-700">End date</label>
                    <input 
                        type="date" 
                        name="end_date" 
                        id="end_date" 
                        placeholder="End Date" 
                        className="w-full px-4 py-3 rounded-lg 
                        bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" 
                        required />
                </div>
            </div>
    </>
  )
}

export default AddMoreExperience
import {useState} from 'react'

const BasicInfo = ({nextPage, formData, setFormData}) => {
    const {id, first_name, last_name, email, telephone, title, career_summary, linkedin, github, website, user_id} = formData

    const [submitted, setSubmitted] = useState(false);


    const onInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onNext = (e) => {
        e.preventDefault()

        // nextPage()

        if(formData.first_name && formData.last_name && formData.email && formData.telephone && formData.title && formData.career_summary){
            
                let data = {
                    'id': formData.id,
                    'first_name':formData.first_name, 
                    'last_name': formData.last_name, 
                    'title': formData.title,
                    'email': formData.email,
                    'telephone': formData.telephone,
                    'career_summary': formData.career_summary,
                    'linkedin': formData.linkedin === undefined ? '' : formData.linkedin,
                    'github': formData.github === undefined ?  '' : formData.github,
                    'website': formData.website === undefined ? '' : formData.website,
                    'user': formData.user,
                }
               console.log(data)
               nextPage()
                
                localStorage.setItem('Basic_Info', JSON.stringify(data))
        }else{
            setSubmitted(true);
        }
        
    }


  return (
    <>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
            <div className='w-full'>
                <label className="block text-gray-700">First name </label>
                <input 
                    type="text" 
                    name="first_name" 
                    id="first_name" 
                    placeholder="Enter First Name" 
                    className={`w-full px-4 py-3 rounded-lg 
                    bg-gray-200 mt-2 border focus:border-blue-500 
                    focus:bg-white focus:outline-none ${submitted && !first_name ? 'border border-red-600' : ''}`} 
                    value={first_name} 
                    minLength="3" 
                    required 
                    onChange={(e) =>onInputChange (e)}
                />
                {submitted && !first_name && <small className="p-error">Field is required.</small>}
            </div>

            <div className="w-full">
                <label className="block text-gray-700">Last name </label>
                <input 
                    type="text" 
                    name="last_name" 
                    id="last_name" 
                    placeholder="Enter Last Name" 
                    minLength="3" 
                    className={`w-full px-4 py-3 rounded-lg 
                    bg-gray-200 mt-2 border focus:border-blue-500 
                    focus:bg-white focus:outline-none ${submitted && !last_name ? 'border border-red-600' : ''}`} 
                    required 
                    value={last_name} 
                    onChange={(e) =>onInputChange (e)}
                    />
                    {submitted && !last_name && <small className="p-error">Field is required.</small>}
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
                    className={`w-full px-4 py-3 rounded-lg 
                    bg-gray-200 mt-2 border focus:border-blue-500 
                    focus:bg-white focus:outline-none ${submitted && !email ? 'border border-red-600' : ''}`} 
                    minLength="6" 
                    value={email} 
                    onChange={(e) =>onInputChange (e)}
                    />
                    {submitted && !email && <small className="p-error">Field is required.</small>}
            </div>

            <div className="w-full">
                <label className="block text-gray-700">Phone Number</label>
                
                <input 
                type="text" 
                name="telephone" 
                id="telephone" 
                placeholder="Enter Phone Number" 
                minLength="6" 
                className={`w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                focus:border-blue-500 focus:bg-white focus:outline-none ${submitted && !telephone ? 'border border-red-600' : ''}`} 
                value={telephone} 
                onChange={(e) =>onInputChange (e)}
                
                />
                {submitted && !telephone && <small className="p-error">Field is required.</small>}
                
            </div>

            <div className="w-full">
                <label className="block text-gray-700">Job Title</label>
                <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Enter Your Job Title" 
                className={`w-full px-4 py-3 rounded-lg 
                    bg-gray-200 mt-2 border focus:border-blue-500 
                    focus:bg-white focus:outline-none ${submitted && !title ? 'border border-red-600' : ''}`}  
                value={title} 
                onChange={(e) =>onInputChange (e)}
                />
                 {submitted && !title && <small className="p-error">Field is required.</small>}
            </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
            <div className='w-full'>
                <label className="block text-gray-700">Career Summary</label>
                <textarea 
                    type="text" 
                    name="career_summary" 
                    id="career_summary" 
                    placeholder="Enter Career Summary" 
                    className={`w-full px-4 py-3 rounded-lg 
                    bg-gray-200 mt-2 border focus:border-blue-500 
                    focus:bg-white focus:outline-none ${submitted && !career_summary ? 'border border-red-600' : ''}`}  
                    cols={3} 
                    rows={3}
                    value={career_summary} 
                    onChange={(e) =>onInputChange (e)}
                ></textarea>
                {submitted && !career_summary && <small className="p-error">Field is required.</small>}
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
                    value={linkedin} 
                    onChange={(e) =>onInputChange (e)}
                     />
            </div>

            <div className="w-full">
                <label className="block text-gray-700">Github</label>
                <input 
                type="text" 
                name="github" 
                id="github" 
                placeholder="Please enter link" 
                minLength="6" 
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                focus:border-blue-500 focus:bg-white focus:outline-none"
                value={github}  
                onChange={(e) =>onInputChange (e)}
                 />
            </div>

            <div className="w-full">
                <label className="block text-gray-700">Website</label>
                <input 
                type="text" 
                name="website" 
                id="website" 
                placeholder="Please enter link" 
                minLength="6" 
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                focus:border-blue-500 focus:bg-white focus:outline-none" 
                value={website} 
                onChange={(e) =>onInputChange (e)}
                 />
            </div>
        </div>
        <div className="bg-gray-100 flex justify-between w-full mx-auto">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
            onClick={(e) => onNext(e)}
            >
                Next <i className="pi pi-angle-right"></i>
            </button>
        </div>
    </>
  )
}

export default BasicInfo
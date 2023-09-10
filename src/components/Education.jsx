import {useState} from 'react'
import { useSelector } from 'react-redux'
import { decodeToken  } from "react-jwt";

const Education = ({nextPage, prevPage, educationForm, setEducationForm}) => {
      const [submitted, setSubmitted] = useState(false);
      const { userToken } = useSelector((state) => state.auth)
      const token = JSON.parse(userToken)
      const resume_id = decodeToken(token.access)['resume']
      
      const removeInputFields = (index)=>{
        // removes fields based on the index return form the state experienceForm

        const rows = [...educationForm];
        rows.splice(index, 1);
        setEducationForm(rows);
      }

      const addInputField = (e)=>{
         // add fields into state experienceForm
        e.preventDefault()
        setEducationForm([...educationForm, {
          title: '',
          duration: '',
          institution: '',
          resume: resume_id,
        }])

      }

      const onInputChange = (index, e)=>{
    
        const { name, value } = e.target;
        const list = [...educationForm];
        list[index][name] = value;
        setEducationForm(list);

    }

    const onNext = (e) => {
      e.preventDefault()

      console.log(educationForm)


      educationForm.map((form, index) => {
        if(form.title && form.institution  && form.duration ){
          // validation check if all fields above are not empty
          let count  = index + 1
              
          if(count === educationForm.length){
            // validation check if number of fields returned are equal to number of fields we are looping
            // if it passes go to next page and save the data on localStorage
            nextPage()
            localStorage.setItem('Education', JSON.stringify(educationForm))
          }
              
        }else{
          // if fields empty return true so we can create a error for the field / fields that are empty
          setSubmitted(true)
        }   
      })
    }

  return (
    <>
          {
            educationForm.map((data, index)=>{
              const {title, duration, institution}= data;
              // setExperienceForm(data)
              
              return(
              <div key={index}>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                    <div className='w-full'>
                        <label className="block text-gray-700">Course Name</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Enter Course Name" 
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !title ? 'border border-red-600' : ''}`}   
                            value={title}
                           onChange={(e) => onInputChange(index, e)} 
                        />
                        {submitted && !title && <small className="p-error">Field is required.</small>}
                    </div>

                    <div className="w-full">
                        <label className="block text-gray-700">Duration</label>
                        <input 
                            type="date" 
                            name="duration" 
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !duration ? 'border border-red-600' : ''}`}   
                            value={duration}
                           onChange={(e) => onInputChange(index, e)} 
                            />
                            {submitted && !duration && <small className="p-error">Field is required.</small>}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                    <div className='w-full'>
                        <label className="block text-gray-700">Institution</label>
                        <input 
                            type="text" 
                            name="institution" 
                            placeholder="Enter Institution Name" 
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !institution ? 'border border-red-600' : ''}`} 
                            value={institution}
                           onChange={(e) => onInputChange(index, e)} 
                        />
                        {submitted && !institution && <small className="p-error">Field is required.</small>}
                    </div>
                </div>
                {
                educationForm.length!==1 ?
                  <button type='button' className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
                  onClick={() => removeInputFields(index)}  >Delete
                  </button>
                :
                ''
                }
              </div>
              )
            })
          }
            
        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
            onClick={(e) => addInputField(e)}>Add More</button>
        </div>

        <div className="bg-gray-100 flex justify-between w-full mx-auto">
            <button className="bg-blue-500 hover:bg-blue-400 text-white 
                font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
                onClick={prevPage}
                >
                <i className="pi pi-angle-left"></i>  Prev             
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
            onClick={(e) => onNext(e)}
            >
                Next <i className="pi pi-angle-right"></i>
            </button>
        </div>
        
    </>
  )
}

export default Education
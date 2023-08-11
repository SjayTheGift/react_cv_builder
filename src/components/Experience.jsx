import {useState} from 'react'
import { toast  } from 'react-toastify';

const Experience = ({nextPage, prevPage, experienceForm, setExperienceForm}) => {
  const [submitted, setSubmitted] = useState(false);
  const [otherError, setOtherError] = useState(false);

      const removeInputFields = (index)=>{
        // removes fields based on the index return form the state experienceForm

        const rows = [...experienceForm];
        rows.splice(index, 1);
        setExperienceForm(rows);
      }

      const addInputField = (e) =>{
        // add fields into state experienceForm
        e.preventDefault()
        setExperienceForm([...experienceForm, {
          position: '',
          company: '',
          start_date: '',
          end_date: '',
          summary: ''
        }])

      }

      const onInputChange = (index, e)=>{
    
        const { name, value } = e.target;
        const list = [...experienceForm];
        list[index][name] = value;
        setExperienceForm(list);

    }

    const onNext = (e) => {
      e.preventDefault()

      experienceForm.map((form, index) => {
        if(form.position && form.company  && form.summary && form.start_date && form.end_date){
           // validation check if all fields above are not empty
          let count  = index + 1

          if(form.start_date > form.end_date){
            // validation check if start date is greater than end date return error

            toast.error("Start Date can not be less then End Date");
            setOtherError(true)

          }else{
            if(count === experienceForm.length){
              // validation check if number of fields returned are equal to number of fields we are looping
              // if it passes go to next page and save the data on localStorage
              nextPage()
              localStorage.setItem('Experience', JSON.stringify(experienceForm))
            }
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
            experienceForm.map((data, index)=>{
              const {position, company, start_date, end_date, summary}= data;

              return(
              <div key={index}>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                    <div className='w-full'>
                        <label className="block text-gray-700">Position</label>
                        <input 
                            type="text" 
                            name="position" 
                            placeholder="Enter Job Title" 
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !position ? 'border border-red-600' : ''}`}  
                            value={position}
                           onChange={(e) => onInputChange(index, e)} 
                        />
                         {submitted && !position && <small className="p-error">Field is required.</small>}
                    </div>

                    <div className="w-full">
                        <label className="block text-gray-700">Company</label>
                        <input 
                            type="text" 
                            name="company" 
                            placeholder="Enter Company Name"
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !company ? 'border border-red-600' : ''}`}   
                            value={company}
                           onChange={(e) => onInputChange(index, e)} 
                            />
                            {submitted && !company && <small className="p-error">Field is required.</small>}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                    <div className='w-full'>
                        <label className="block text-gray-700">Start Date</label>
                        <input 
                            type="date" 
                            name="start_date" 
                            placeholder="Start Date" 
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !start_date || otherError && start_date > end_date ? 'border border-red-600' : ''}  `}   
                            value={start_date}
                           onChange={(e) => onInputChange(index, e)} 
                        />
                        {submitted && !start_date && <small className="p-error">Field is required.</small>}
                    </div>

                    <div className="w-full">
                        <label className="block text-gray-700">End date</label>
                        <input 
                            type="date" 
                            name="end_date" 
                            placeholder="End Date" 
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !end_date || otherError && start_date > end_date ? 'border border-red-600' : ''}`}  
                            value={end_date}
                           onChange={(e) => onInputChange(index, e)} 
                            />
                          {submitted && !end_date && <small className="p-error">Field is required.</small>}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-4'>
                    <div className='w-full'>
                        <label className="block text-gray-700">Job Summary</label>
                        <textarea 
                            type="text" 
                            name="summary" 
                            placeholder="Job Summary" 
                            className={`w-full px-4 py-3 rounded-lg 
                              bg-gray-200 mt-2 border focus:border-blue-500 
                              focus:bg-white focus:outline-none ${submitted && !summary ? 'border border-red-600' : ''}`}  
                            cols={3} 
                            rows={3} 
                            value={summary}
                           onChange={(e) => onInputChange(index, e)} 
                        ></textarea>
                        {submitted && !summary && <small className="p-error">Field is required.</small>}
                    </div>

                </div>
                {
                experienceForm.length!==1 ?
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
            onClick={(e) =>addInputField(e)}>Add More</button>
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

export default Experience
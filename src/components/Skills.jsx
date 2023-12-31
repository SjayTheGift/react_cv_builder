import {useState, useEffect} from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { decodeToken  } from "react-jwt";

import { updateResume } from '../features/builder/builderActions';


const Skills = ({experienceForm, educationForm, formData, skills, setSkills, prevPage}) => {
  const [submitted, setSubmitted] = useState(false);

  const [skillInput, setSkillInput] = useState('')
  const [allSkills, setAllSkills] = useState([])

  const { isSuccess } = useSelector((state) => state.builder)




  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onInputChange = (e) => {
    setSkillInput(e.target.value)
  }

  const onAddSkill = (e) => {
    e.preventDefault()

    if(skillInput === ''){
      setSubmitted(true)
    }else{
      const newList = skills.concat(skillInput);
      setSkills(newList)
      localStorage.setItem('Skills', JSON.stringify(newList))
      setSkillInput('')
      setSubmitted(false)
    }
  }

  const removeSkill = (index) =>{
    const rows = [...skills];
    rows.splice(index, 1);
    setSkills(rows);
  }

  // useEffect(() => {
    
  //   skills.map((skill => {
  //     setAllSkills(skill.title)
  //   }))
    

  // },[isSuccess])

  const onSubmit = (e) => {
    e.preventDefault()
    
    dispatch(updateResume(formData))

    
    if(isSuccess){

      experienceForm.map((form)=>{
        if(form.id){
          dispatch(updateExperience(form))
        }else{
          dispatch(addExperience(form))
        }
      })

      educationForm.map((form)=>{
        if(form.id){
          dispatch(updateEducation(form))
        }else{
          dispatch(addEducation(form))
        }
      })

      // skills.map((skill => {
      //   dispatch(addSkill(skill))
      // }))
      
    }

    navigate('/resume')
  }
  
  

  console.log('all_skills '+ allSkills)



  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 w-full'>
            <div className='w-full sm:w-[90%]'>
                <input 
                    type="text" 
                    name="skill" 
                    id="skill" 
                    placeholder="Enter skill" 
                    className={`w-full px-4 py-3 rounded-lg 
                      bg-gray-200 mt-2 border focus:border-blue-500 
                      focus:bg-white focus:outline-none ${submitted && !skillInput ? 'border border-red-600' : ''}`}  
                    value={skillInput}
                    onChange={(e) => onInputChange(e)}
                />
                {submitted && !skillInput && <small className="p-error">Field is required.</small>}
            </div>

            <div className="sm:w-[8%]">
              <button type='button' className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 flex items-center"
              onClick={(e) => onAddSkill(e)}>Add 
            </button>
            </div>
        </div>
        <div className='flex flex-wrap gap-5 mt-4'>
          {skills.map((skill, index) => 
            <div className='flex justify-center items-center'>
              <p className='bg-[#002D74] text-white py-1 px-3 rounded-full cursor-pointer' 
               onClick={() => removeSkill(index)}> {skill.title} <i className="pi pi-times ml-1"></i> </p>
            </div>
          )}
       
       
        </div>
          <div className="bg-gray-100 flex justify-between w-full mx-auto">
            <button className="bg-blue-500 hover:bg-blue-400 text-white 
                font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
                onClick={prevPage}
                >
                <i className="pi pi-angle-left"></i>  Prev             
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
            onClick={(e) => onSubmit(e)}
            >
               Submit And Preview  {/* <i className="pi pi-check ml-1"></i>  */}
            </button>
        </div>
    </div>
  )
}

export default Skills
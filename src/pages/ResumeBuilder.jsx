import React,{ useState, useEffect} from 'react'
import ProgressSteps from '../components/ProgressSteps'
import NextAndPrev from '../components/NextAndPrev'
import BasicInfo from '../components/BasicInfo'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import { decodeToken  } from "react-jwt";

import { fetchResume } from '../features/builder/builderActions';
import { useDispatch, useSelector } from 'react-redux'

const ResumeBuilder = () => {
    const [page, setPage] = useState(0)
    const { userToken } = useSelector((state) => state.auth)
    const token = JSON.parse(userToken)
    // const user_id = decodeToken(token.access)['user_id']
    const resume_id = decodeToken(token.access)['resume']

    const pageTitle = [
        'Basic Info',
        'Experience',
        'Education',
        'Skills',
    ]

    
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        id: '',
        first_name:'', 
        last_name: '', 
        title: '',
        email: '',
        telephone: '',
        career_summary: '',
        linkedin: '',
        github: '',
        website: '',
        user: '',
    })

    const { resumeData, isSuccess } = useSelector((state) => state.builder)
  

    const [experienceForm, setExperienceForm] = useState([{
        id: '',
        position: '',
        company: '',
        start_date: '',
        end_date: '',
        summary: '',
        resume: '',
    }])

    const [educationForm, setEducationForm] = useState([{
        id: '',
        course: '',
        institution: '',
        duration: '',
        resume: resume_id,
    }])

    const [skills, setSkills] = useState([{
        id: '',
        title: '',
    }])


    // console.log(skillInput)

  
  useEffect(() =>{
    dispatch(fetchResume())

    
    // dispatch(fetchSkill())
    

    if(isSuccess){
        setFormData(JSON.parse(resumeData)[0])
        setExperienceForm(JSON.parse(resumeData)[0].experiences)
        setEducationForm(JSON.parse(resumeData)[0].educations)
        setSkills(JSON.parse(resumeData)[0].skills)
    }

    // if(isExperienceSuccess && experienceData != null){
    //     setExperienceForm(JSON.parse(experienceData))
    // }

    // if(isEducationSuccess && educationData != null){
    //     setEducationForm(JSON.parse(educationData))
    // }

    // if(isSkillSuccess && skillData != null){
    //     setSkillInput(JSON.parse(skillData))
    // }
    

  },[resumeData, isSuccess])


//   if(!experienceData){
//     setExperienceForm(JSON.parse(experienceData))
//    }

    
    // const personalData = JSON.parse(localStorage.getItem('personalInfoData'));
    
    console.log('test', resume_id)
    
    const nextPage = () => {
        setPage((currentPage) => currentPage + 1) 
    }

    const prevPage = () => {
        setPage((currentPage) => currentPage - 1) 
    }

    

    // const json_data = localStorage.setItem('Basic_Info', JSON.stringify(formData));



    const getFormInput =  () =>{
        switch (page) {
            case 0:
            return <BasicInfo nextPage={nextPage} formData={formData} setFormData={setFormData} />;
            break;
            case 1:
                return <Experience nextPage={nextPage} prevPage={prevPage} experienceForm={experienceForm} setExperienceForm={setExperienceForm}/>;
            break;
            case 2:
                return <Education nextPage={nextPage} prevPage={prevPage} educationForm={educationForm} setEducationForm={setEducationForm}/>;
            break;
            case 3:
                return <Skills educationForm={educationForm} experienceForm={experienceForm} formData={formData} skills={skills} setSkills={setSkills} prevPage={prevPage}/>;
            break;
            // case 4:
            //     return <Achievements />;
            //   break;
        }
    }
    
   

  return (
    <section className="w-full bg-gray-200 min-h-screen pt-[90px]">

        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#002D74] mb-4">Create online resume</h2>
        
        <div className="bg-gray-100 p-5 rounded-2xl shadow-lg w-full md:w-[80%] mx-auto my-5">
            <ProgressSteps page={page}/>
        </div>
        

        <div className='flex flex-col items-center'>
            <div className="bg-gray-100 p-5 flex justify-center items-center rounded-2xl shadow-lg w-full md:w-[80%]">
                <div className="w-full px-5">
                    <form className="mt-6" method="POST">
                    <p className='text-1xl md:text-2xl font-bold my-2 text-[#002D74]'>
                        {pageTitle[page]}
                    </p>
                        {getFormInput()}
                    </form>
                </div>
            </div>
        </div>


        
        

        {/* <div className="bg-gray-100 p-5 flex justify-between rounded-2xl shadow-lg w-full md:w-[80%] mx-auto my-5">
           <NextAndPrev pageTitle={pageTitle} prevPage={prevPage} nextPage={nextPage} page={page}/>
        </div> */}


    </section>
  )
}

export default ResumeBuilder

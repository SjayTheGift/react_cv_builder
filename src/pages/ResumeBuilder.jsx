import React,{useState} from 'react'
import ProgressSteps from '../components/ProgressSteps'
import NextAndPrev from '../components/NextAndPrev'
import BasicInfo from '../components/BasicInfo'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import { decodeToken  } from "react-jwt";

import { useSelector } from 'react-redux'


const ResumeBuilder = () => {
    const [page, setPage] = useState(0)
    const { userToken } = useSelector((state) => state.auth)
    const token = JSON.parse(userToken)
    const user_id = decodeToken(token.access)['user_id']
    const resume_id = decodeToken(token.access)['resume']

    console.log(user_id)

    const pageTitle = [
        'Basic Info',
        'Experience',
        'Education',
        'Skills',
    ]

    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        email: '',
        telephone: '',
        title: '',
        career_summary: '',
        linkedin: '',
        github: '',
        website: '',
        user: user_id,
    })

    const [experienceForm, setExperienceForm] = useState([{
        position: '',
        company: '',
        start_date: '',
        end_date: '',
        summary: '',
        resume: resume_id,
    }])

    const [educationForm, setEducationForm] = useState([{
        course_name: '',
        institution: '',
        duration: '',
    }])

    const [skillInput, setSkillInput] = useState()
  

    
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
                return <Skills experienceForm={experienceForm} formData={formData} skillInput={skillInput} setSkillInput={setSkillInput} prevPage={prevPage}/>;
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

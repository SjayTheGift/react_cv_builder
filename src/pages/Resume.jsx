import {useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

const Resume = () => {
    const componentRef  = useRef(null);
    // const [basicInfo, setBasicInfo] = useState()
    const [pageWidth, setPageWidth] = useState('w-[80%]')

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      
    });
    

    const basicInfo = JSON.parse(localStorage.getItem('Basic_Info')) ? JSON.parse(localStorage.getItem('Basic_Info')): {
      first_name: '',
      last_name: '',
      title: '',
      email: '',
      career_summary: '',
      github: '',
      linkedin: '',
      website: ''
    }
    const educations = JSON.parse(localStorage.getItem('Education')) ? JSON.parse(localStorage.getItem('Education')): [{
      course_name: '',
      duration: '',
      institution: '',
    }]
    const experiences = JSON.parse(localStorage.getItem('Experience')) ? JSON.parse(localStorage.getItem('Experience')): [{
      company: '',
      start_date: '',
      end_date: '',
      position: '',
      summary: '',
    }]

    const skills = JSON.parse(localStorage.getItem('Skills')) ? JSON.parse(localStorage.getItem('Skills')): ['']

 
   

  return (
    <section className="w-full bg-gray-200 min-h-screen pt-[80px]">
        <div className='flex justify-center items-center my-5'>
          <button onClick={handlePrint}
          className='text-xl md:text-2xl text-center bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 mb-4'>
            DownLoad
          </button>
        </div>
        
        

        <div className={`grid grid-cols-3 gap w-full mx-auto min-h-screen bg-white rounded-2xl shadow-md`} ref={componentRef }>
          <div className="bg-gray-700 text-gray-300 py-5 px-5 rounded-l-2xl flex flex-col">
            <h3 className='text-2xl pt-5 uppercase'>Contact</h3>
            <div className='w-full bg-white h-1 mt-2'></div>

            <div className='my-2'>
              <div className='flex flex-row gap-5 items-center mt-3'>
                  <i className='pi pi-phone'></i>
                  <div className='flex flex-col w-full'>
                      <p>{basicInfo.telephone}</p>
                  </div>
                </div>

                <div className='flex flex-row gap-5 items-center my-3'>
                  <i className='pi pi-envelope'></i>

                  <div className='flex flex-col w-full'>
                      <p>{basicInfo.email}</p>
                  </div>
                </div>

                
                  <div className='flex flex-col w-full'>
                    <div className='flex flex-row gap-5 items-center'>
                        <i className='pi pi-globe'></i>
                        <a href={basicInfo.website} target='_blank'>Portfolio</a>
                    </div>

                    <div className='flex flex-row gap-5 items-center my-3'>
                        <i className='pi pi-github'></i>
                        <a href={basicInfo.github}  target='_blank'> Github</a>
                    </div>
                    
                    <div className='flex flex-row gap-5 items-center'>
                      <i className='pi pi-linkedin'></i>
                      <a href={basicInfo.linkedin} target='_blank'>Linkedin</a>
                    </div>
                </div>
            </div>
              

            <h3 className='text-2xl uppercase'>Skills</h3>
            <div className='w-full bg-white h-1 mt-2'></div>
            <div className='px-5 py-5'>
              {skills.map((skill, index) =>
                <ul className='list-disc' key={index}>
                  <li>{skill}</li>
                </ul>
              )}
            </div>
          </div>
          <div className="col-span-2 bg-gray-300 text-gray-700 py-3 px-3 rounded-r-2xl">
            <div className='py-5 flex flex-col'> 
              <div>
                  <h1 className='text-5xl font-bold uppercase'>{basicInfo.first_name} {basicInfo.last_name}</h1>
                  <p className='text-2xl py-1 uppercase'>{basicInfo.title}</p>
              </div>
              <div className='my-1'>
                <h3 className='text-2xl uppercase'>Profile</h3>
                <div className='w-full bg-gray-700 h-1 my-2'></div>
                <p>
                 {basicInfo.career_summary}
                </p>
              </div>

              <div className='my-1'>
                <h3 className='text-2xl uppercase'>Experience</h3>
                <div className='w-full bg-gray-700 h-1 my-2'></div>
                {experiences.map((experience, index) => 
                  <div className='flex gap-1 my-2' key={index}>
                    <p className='w-full md:w-[80%]'>{experience.start_date.slice(0, 4)} - {experience.end_date.slice(0, 4)}</p>
                    <div className=''>
                      <p className='font-semibold'>{experience.company}</p>
                      <p>{experience.summary}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className='my-1'>
                <h3 className='text-2xl uppercase'>Education</h3>
                <div className='w-full bg-gray-700 h-1 my-2'></div>
                  {educations.map((education, index) =>
                    <div className='flex gap-10 my-2' key={index}>
                      <p className=''>{education.duration.slice(0, 4)}</p>
                      <div className=''>
                        <p className='font-semibold'>{education.institution}</p>
                        <p>{education.course_name}</p>
                      </div>
                  </div>
                  )}
                  

              </div>
            </div>
          </div>
        </div>
        


    </section>
  )
}

export default Resume

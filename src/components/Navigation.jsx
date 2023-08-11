
import {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Navigation() {
    const [nav, setNav] = useState(false);

    return (
        <section className={` bg-white shadow-sm w-full h-auto fixed top-0 left-0 z-[300] transition-all duration-500 `}>
            <div className='w-[85%] mx-auto flex md:flex md:justify-between items-center px-4 py-2'>
                <Link  className='py-4 text-xl text-[#002D74] font-bold' >
                    CV Builder
                </Link>
                <div onClick={() => setNav(!nav)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <i className='pi pi-fw pi-align-left'></i>
                </div>
                <div onClick={() => setNav(!nav)} >
                    <ul className={`flex flex-col md:flex-row items-center md:pb-0 pb-12 
                    absolute  md:static bg-white md:z-auto z-[-1] top-0 left-0 w-full md:w-auto md:pl-0 pl-9 
                    transition-all duration-500 ease-in-out ${nav ? 'top-[100%] opacity-100': 'top-[-1000%] opacity-0 md:opacity-100'}`}>
                    <Link  to="/resume-builder"
                        className='md:ml-8 no-underline hover:text-orange-500 duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                        <i className='pi pi-fw pi-pencil'></i>Edit Resume
                    </Link>
                    <Link to="/resume" 
                        className='md:ml-8 hover:text-orange-500 duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                        <i className='pi pi-fw pi-file-pdf'></i>Preview Resume
                    </Link>
                    <Link to="/logout"
                        className='md:ml-8 hover:text-orange-500 duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                    <i className='pi pi-fw pi-power-off'></i>Log-out
                    </Link>
                    </ul>
                </div>
            </div>
      </section>
    )
}
        
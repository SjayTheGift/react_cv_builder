import React from 'react'

const NextAndPrev = ({pageTitle, prevPage, nextPage, page}) => {

    const onSubmit = ()=> {
        console.log('submitted')
    }

  return (
    <>
    {page !== 0 &&
        <button className="bg-blue-500 hover:bg-blue-400 text-white 
        font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
        onClick={prevPage}
        >
        <i className="pi pi-angle-left"></i>  Prev             
        </button>
    }
       
    {page !== pageTitle.length-1 ? 
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
        onClick={nextPage}
        >
            Next <i className="pi pi-angle-right"></i>
        </button>
        :
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center"
        onClick={onSubmit}
        >
            <i className="pi pi-check mr-1"></i> Submit
        </button>
    }
    </>
  )
}

export default NextAndPrev

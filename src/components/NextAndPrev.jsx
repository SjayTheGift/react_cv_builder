import React from 'react'

const NextAndPrev = () => {
  return (
    <>
       <button className="bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center">
            <i className="pi pi-angle-left"></i>  Prev             
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 flex items-center">
            Next <i className="pi pi-angle-right"></i>
        </button>
    </>
  )
}

export default NextAndPrev

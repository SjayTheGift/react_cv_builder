import React, { useState, useRef } from 'react';

export default function ProgressSteps({page}) {

return (
    <div>
        <h2 className="sr-only">Steps</h2>

        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li className="flex items-center gap-2  p-2 border border-blue-500 w-full">
                <span className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold   ${page === 0 ? 'bg-blue-500 text-white' : ''} `}>
                1
                </span>

                <span className="hidden sm:block"> Basic info </span>
            </li>

            <li className="flex items-center gap-2  p-2 border border-blue-500 w-full">
                <span className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold  ${page === 1 ? 'bg-blue-500 text-white' : ''} `}>
                2
                </span>

                <span className="hidden sm:block"> Experience </span>
            </li>

            <li className="flex items-center gap-2  p-2 border border-blue-500 w-full">
                <span className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold ${page === 2 ? 'bg-blue-500 text-white' : ''} `}>
                3
                </span>

                <span className="hidden sm:block"> Education </span>
            </li>
            <li className="flex items-center gap-2  p-2 border border-blue-500 w-full">
                <span className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold  ${page === 3 ? 'bg-blue-500 text-white' : ''} `}>
                4
                </span>

                <span className="hidden sm:block"> Skills </span>
            </li>
            </ol>
        </div>
    </div>
)
}
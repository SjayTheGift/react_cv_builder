import React, { useState } from 'react';
import { Steps } from 'primereact/steps';


export default function ProgressSteps2() {
    const [activeIndex, setActiveIndex] = useState(1);
    const items = [
        {
            label: 'Basic info',
        },
        {
            label: 'Experience',

        },
        {
            label: 'Education',

        },
        {
            label: 'Skills',

        },
        {
            label: 'Achievements',

        },
        {
            label: 'Review',
        }
    ];

    return (
        <div className="">
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} className=''/>
        </div>
    )

}
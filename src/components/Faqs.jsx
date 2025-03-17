import React, { useState } from 'react'
import Accordion from './Accordion.jsx'; 

const Faqs = () => {
    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            title: 'What is fantasy gaming?', 
            data: `Fantasy gaming allows players to create virtual teams of real-life athletes and compete for points based on their performance.`, 
            isOpen: false
        }, 
        { 
            key: 2, 
            title: 'How to play fantasy sports?', 
            data: `Select a match, create your team, and join contests to compete with other players.`, 
            isOpen: false
        }, 
        { 
            key: 3, 
            title: 'Is Strike11 Sports Fantasy a reliable fantasy platform?', 
            data: `Yes, Strike11 Sports Fantasy is a secure platform adhering to industry standards, ensuring fair play, transparent rules, and seamless user experience.`, 
            isOpen: false
        }, 
        { 
            key: 4, 
            title: 'How can I get an intimation of my winning a contest?', 
            data: `Winners are notified through the platform’s notification system or via registered email and phone number.`, 
            isOpen: false
        }, 
    ]); 

    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
  
        setAccordion(updatedAccordions); 
    }; 

    return (
        <div className='bg-black py-20'>
            <div className='flex flex-col gap-6 md:mx-24 mx-2 '>
                <h2 className='text-5xl font-semibold text-center'>Frequently Asked <span className='text-amber-700'>Questions</span></h2>
                {accordions.map((accordion) => ( 
                    <Accordion 
                        key={accordion.key} 
                        title={accordion.title} 
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))} 
            </div>
        </div>
    )
}

export default Faqs

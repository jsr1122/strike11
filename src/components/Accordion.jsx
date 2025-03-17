import React from 'react'

const Accordion = (props) => {
    return (
        <div className=" mb-1">
            <button
                className="w-full p-4 text-left rounded-lg bg-stone-900  
                            transition duration-300"
                onClick={props.toggleAccordion}
            >
                {props.title}
                <span className={`float-right transform ${props.isOpen ?
                    'rotate-180' : 'rotate-0'}  
                                 transition-transform duration-300`}>
                    &#9660;
                </span>
            </button>
            {props.isOpen && (
                <div className="p-4 bg-white/5 rounded-lg">
                    {props.data}
                </div>
            )}
        </div>
    )
}

export default Accordion

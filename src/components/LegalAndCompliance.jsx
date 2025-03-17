import React from 'react'
import { Link } from 'react-router-dom'

const LegalAndCompliance = () => {
    return (
        <div>
            <div className=''>
                <div className='flex flex-col gap-6 md:mx-24 mx-2 my-20'>
                    <h2 className='text-5xl font-semibold text-center'>Legal and <span className='text-amber-700'>Compliance</span></h2>
                    <p className='text-gray-400 mx-10 py-10 text-lg'>Strike11 Sports Fantasy strictly adheres to Indian laws governing fantasy sports. The platform is restricted in states where fantasy sports contests are prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, and Tamil Nadu. Additionally, users must be 18 years or older to participate, ensuring responsible usage and compliance with regulations.</p>
                    <h2 className='text-3xl font-medium'>Transparency and Fair Play</h2>
                    <p className='text-gray-400'><span className='font-medium text-white'>Clear Terms and Conditions:</span> All contest rules, guidelines, and user responsibilities are outlined transparently.</p>
                    <Link to={'/term&cond'}><button className='border p-2 rounded-lg px-3 bg-amber-950 hover:bg-amber-900'>Know More - Click Here for Terms and Conditions</button></Link>                
                    <p className='text-gray-400'><span className='font-medium text-white'>Responsible Gaming Initiatives:</span> Users are educated on responsible participation, reinforcing the message that fantasy sports are skill-based activities meant for entertainment.</p>
                    <Link to={'/fantasy'}><button className='border p-2 rounded-lg px-3 bg-amber-950 hover:bg-amber-900'>Know More - Click Here for Responsible Gaming</button></Link>
                    <p className='text-gray-400'>Strike11 Sports Fantasy is dedicated to providing an engaging, transparent, and skill-driven fantasy sports experience for users across India. By emphasizing fair play, skill development, and free participation, we aim to build a sustainable and responsible fantasy sports ecosystem.</p>
                </div>
            </div>
        </div>
    )
}

export default LegalAndCompliance

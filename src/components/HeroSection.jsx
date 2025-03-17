import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  return (
    <div className=''>
      <div className='flex flex-col gap-6 justify-center items-center my-20 px-2'>
        <h2 className='text-5xl'>Welcome to Strike11 Fantasy Sport!</h2>
        <h3 className='text-4xl'>Join now and showcase your skills!</h3>
        <button onClick={openModal} className='flex items-center justify-center gap-3 text-green-600 text-3xl border p-2 rounded-2xl px-3'><span><FaWhatsapp /></span>Chat on WhatsApp</button>
        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-stone-950 w-11/12 max-w-md p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-white">Are You 18+?</h2>
              <p className='py-6'>This website is for users who are 18 or older. Please confirm your age to continue.</p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                >
                  Yes
                
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroSection

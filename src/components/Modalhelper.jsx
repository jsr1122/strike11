import React from 'react'

const Modalhelper = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Do not render the modal if it's closed

    return (
      <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center z-50 px-2">
        <div className="bg-stone-950 rounded-lg p-8 md:w-[500px] w-96">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Are you 18+?</h2>
          </div>
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    );
}

export default Modalhelper

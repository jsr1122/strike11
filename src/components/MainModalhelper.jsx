import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';

const MainModalhelper = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Do not render the modal if it's closed

    return (
      <div className="fixed inset-0 md:hidden bg-gray-400 bg-opacity-50 flex justify-center items-center z-50 px-2">
        <a href="https://wa.me/9142773597" target="_blank">
            <img src="hero.webp" alt=""  className='object-cover'/>
        </a>
      </div>
    );
}

export default MainModalhelper

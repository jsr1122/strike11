import React, { useEffect, useState } from 'react'
import ModalHelper from './Modalhelper';
import authScreenAtom from '../atom/modalAtom';
import { useSetRecoilState } from 'recoil';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const setauthScreen = useSetRecoilState(authScreenAtom)

    // Open the modal when the page loads
    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setauthScreen(true);
    };
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-800 mx-2 border">
            <ModalHelper isOpen={isModalOpen} onClose={closeModal}>
                <p className='pb-6'>This website is for users who are 18 or older. Please confirm your age to continue.</p>
                <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Yes
                </button>
            </ModalHelper>
        // </div>
    )
}

export default Modal

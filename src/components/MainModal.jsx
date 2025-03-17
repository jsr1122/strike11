import React, { useEffect, useState } from 'react'
import MainModalHelper from './MainModalhelper.jsx';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import authScreenAtom from '../atom/modalAtom.js';

const MainModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open the modal when the page loads
    const setauthScreen = useSetRecoilState(authScreenAtom)
    const authScreenState = useRecoilValue(authScreenAtom);

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-800 mx-2 border">
            <MainModalHelper isOpen={authScreenState} onClose={closeModal}>
                <p className='pb-6'>This website is for users who are 18 or older. Please confirm your age to continue.</p>
                <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Yes
                </button>
            </MainModalHelper>
        // </div>
    )
}

export default MainModal

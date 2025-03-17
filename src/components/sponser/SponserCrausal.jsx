import React, { useContext } from "react";
import SponserCard from "./SponserCard";
import { Link } from "react-router-dom";


const SponsorCrausal = () => {


    return (
        <div className="w-full md:h-[60vh] sm:mt-0 mt-20"
            style={{
                backgroundImage: "url(" + "/logo.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="h-full w-full justify-center items-center flex-1 "
            style={{
                background:'linear-gradient(to bottom, rgba(2, 2, 2, 0.933),rgba(2, 2, 2, 0.933))'
            }}
            >
                <div className='w-full'>
                    <h2 className='w-full text-3xl text-center text-white font-semibold md:text-5xl py-20'>Users <span className='text-amber-700'>Reviews</span></h2>
                </div>
                <div className="w-full">
                    <SponserCard />
                </div>
                
            </div>
        </div>
    );
};

export default SponsorCrausal
    ;

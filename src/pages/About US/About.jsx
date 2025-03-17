import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const About = () => {
    return (
        <>
            <Layout>
            <div className='flex flex-col gap-6 md:mx-24 mx-2 my-20'>
                <h2 className='text-5xl font-semibold text-center pb-10'>About Us <span className='text-amber-700'>Strike11 Fantasy Sports</span></h2>
                <h2 className='text-4xl font-semibold text-center'>Who We Are</h2>
                <p className='text-center text-xl pb-10 pt-3'>Strike11 Fantasy Sport is a premier fantasy sports platform designed to bring excitement and competition to sports lovers across India.</p>
                <div className='flex flex-wrap items-center justify-center gap-12 gap-x-16'>
                    <div className='w-1/3 h-44 bg-white/10 px-12 justify-center items-start rounded-xl flex flex-col gap-3'>
                        <h2 className='font-medium text-lg'>Our Mission</h2>
                        <p>To create a fair, fun, and responsible gaming environment where players can enjoy fantasy sports legally and ethically.</p>
                    </div>
                    <div className='w-1/3 h-44 bg-white/10 px-12 justify-center items-start rounded-xl flex flex-col  gap-3'>
                        <h2 className='font-medium text-lg'>Why Choose Us?</h2>
                        <div className='text-left'>
                            <p>Legal and Secure</p>
                            <p>Fair Play & Transparency</p>
                            <p>Exciting Contests</p>
                            <p>Easy Withdrawals</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-44 bg-white/10 px-12 justify-center items-start rounded-xl flex flex-col  gap-3'>
                        <h2 className='font-medium text-lg'>Responsible Gaming</h2>
                        <p>We provide tools to help users manage their time and spending with self-exclusion options and spending limits.</p>
                    </div>
                    <div className='w-1/3 h-44 bg-white/10 px-12 justify-center items-start rounded-xl flex flex-col  gap-3'>
                        <h2 className='font-medium text-lg'>Meet Our Team</h2>
                        <p>Passionate sports lovers, gaming experts, and technology professionals committed to enhancing your fantasy sports experience.</p>
                    </div>
                    
                </div>
                <p className='text-center text-xl pb-10 pt-6'>At Strike11 Sports Fantasy, our goal is to create a safe, fair, and rewarding space for every sports fan. Whether you’re new to fantasy sports or a seasoned player, Strike11 Sports Fantasy offers a unique, risk-free environment to engage in your passion for cricket and other sports.</p>
            </div>
                
            </Layout>
        </>
    )
}

export default About
